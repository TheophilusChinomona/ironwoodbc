import { test, expect, type Page } from '@playwright/test';

async function contact(page: Page) {
  await page.goto('/contact', { waitUntil: 'networkidle' });
}
async function choose(page: Page, label: string, option: string) {
  await page.getByRole('combobox', { name: label }).click();
  await page.getByRole('option', { name: option, exact: true }).click();
}
async function fill(page: Page, phone = '0820000000') {
  await page.getByLabel('Full Name').fill('QA Callback Test');
  await page.getByLabel('Phone Number').fill(phone);
  await page.getByLabel('Email', { exact: true }).fill('qa@example.com');
  await choose(page, 'I am a/an', 'Business');
  await choose(page, 'Service Needed', 'Tax Services');
  await choose(page, 'Best Time to Call', 'Morning (08:00 - 12:00)');
  await page.locator('button[role="checkbox"]').click();
}
const submit = (page: Page) => page.getByRole('button', { name: 'Request a Callback', exact: true });
const success = { success: true, message: 'Callback request submitted successfully' };

test.afterEach(async ({ page }, info) => {
  await info.attach('viewport', { body: await page.screenshot(), contentType: 'image/png' });
});

for (const failure of ['network', 'server', 'non-JSON gateway'] as const) {
  test(`${failure} failure is visible and retry preserves inputs`, async ({ page }, info) => {
    await contact(page);
    await fill(page);
    await page.route('**/api/callback', route => failure === 'network'
      ? route.abort('internetdisconnected')
      : route.fulfill({ status: 500, contentType: failure === 'server' ? 'application/json' : 'text/html', body: failure === 'server' ? JSON.stringify({ message: 'Server failed' }) : '<h1>Gateway error</h1>' }));
    await submit(page).click();
    const error = page.getByRole('alert').filter({ hasText: 'could not send' });
    await expect(error).toBeVisible();
    await expect(error).toBeInViewport();
    await expect(error).toContainText(/try again/i);
    await info.attach('failure-feedback', { body: await page.screenshot(), contentType: 'image/png' });
    await expect(page.getByLabel('Full Name')).toHaveValue('QA Callback Test');
    await expect(page.getByLabel('Phone Number')).toHaveValue('0820000000');
    await expect(page.getByRole('combobox', { name: 'Service Needed' })).toHaveText('Tax Services');
    await expect(page.locator('button[role="checkbox"]')).toHaveAttribute('aria-checked', 'true');
    await page.unroute('**/api/callback');
    await page.route('**/api/callback', route => route.fulfill({ json: success }));
    await submit(page).click();
    await expect(page.getByText('Your callback request has been submitted successfully.')).toBeVisible();
  });
}

test('home callback CTA lands with the first field visible on mobile', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.locator('main').getByRole('link', { name: 'Request a Callback', exact: true }).first().click();
  await expect(page).toHaveURL(/\/contact#callback$/);
  await expect(page.getByLabel('Full Name')).toBeInViewport();
  const top = await page.getByLabel('Full Name').evaluate(el => el.getBoundingClientRect().top);
  expect(top).toBeGreaterThanOrEqual(64);
});

test('all callback links target the form, but ordinary contact navigation stays intact', async ({ page }) => {
  for (const path of ['/', '/services', '/industries']) {
    await page.goto(path, { waitUntil: 'networkidle' });
    const links = await page.getByRole('link', { name: 'Request a Callback', exact: true }).evaluateAll(els => els.map(e => e.getAttribute('href')));
    expect(links.length).toBeGreaterThan(0);
    expect(links.every(href => href === '/contact#callback')).toBe(true);
  }
  await expect(page.locator('footer').getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute('href', '/contact');
});

test('formatted phone reaches the API in canonical form', async ({ page }) => {
  await contact(page);
  await fill(page, '+27 (82) 000-0000');
  let phone: string | undefined;
  await page.route('**/api/callback', route => {
    phone = route.request().postDataJSON().phone;
    return route.fulfill({ json: success });
  });
  await submit(page).click();
  await expect(page.getByText('Your callback request has been submitted successfully.')).toBeVisible();
  expect(phone).toBe('+27820000000');
});

test('phone offers phone-entry and autofill semantics', async ({ page }) => {
  await contact(page);
  const phone = page.getByLabel('Phone Number');
  await expect(phone).toHaveAttribute('type', 'tel');
  await expect(phone).toHaveAttribute('inputmode', 'tel');
  await expect(phone).toHaveAttribute('autocomplete', 'tel');
});

test('long service selection does not overflow at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await contact(page);
  await choose(page, 'Service Needed', 'Company Secretarial & Compliance');
  await page.waitForFunction(() => !document.body.hasAttribute('data-scroll-locked'));
  await page.evaluate(() => document.fonts.ready);
  const sizes = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
  await test.info().attach('narrow-metrics', { body: JSON.stringify(sizes), contentType: 'application/json' });
  expect(sizes.viewport).toBe(320);
  expect(sizes.document).toBeLessThanOrEqual(320);
  const trigger = page.getByRole('combobox', { name: 'Service Needed' });
  const widths = await trigger.evaluate(el => ({ trigger: el.getBoundingClientRect().width, parent: el.parentElement!.getBoundingClientRect().width }));
  expect(widths.trigger).toBeLessThanOrEqual(widths.parent);
  await expect(trigger).toHaveText('Company Secretarial & Compliance');
});

test('success confirmation is immediately visible and focused, and reset clears controlled selects', async ({ page }) => {
  await contact(page);
  await fill(page);
  await page.route('**/api/callback', route => route.fulfill({ json: success }));
  await submit(page).click();
  const confirmation = page.getByRole('status').filter({ hasText: 'Thank You!' });
  await expect(confirmation).toBeVisible();
  await expect(confirmation).toBeFocused();
  // Evaluate bounds before any locator scroll or element screenshot can hide the regression.
  const bounds = await confirmation.evaluate(el => ({ top: el.getBoundingClientRect().top, bottom: el.getBoundingClientRect().bottom, height: innerHeight }));
  expect(bounds.top).toBeGreaterThanOrEqual(64);
  expect(bounds.bottom).toBeLessThanOrEqual(bounds.height);
  await expect(confirmation).toHaveAttribute('aria-live', 'polite');
  await test.info().attach('success-feedback', { body: await page.screenshot(), contentType: 'image/png' });
  await page.getByRole('button', { name: 'Submit Another Request' }).click();
  await expect(page.getByLabel('Full Name')).toHaveValue('');
  await expect(page.getByRole('combobox', { name: 'Service Needed' })).toHaveText('Select a service');
  await expect(page.getByRole('combobox', { name: 'I am a/an' })).toHaveText('Select one');
  await expect(page.getByRole('combobox', { name: 'Best Time to Call' })).toHaveText('Select time');
});

for (const [slug, label] of [
  ['accounting-financial-reporting', 'Accounting & Financial Reporting'],
  ['tax-services', 'Tax Services'],
  ['payroll-services', 'Payroll Services'],
  ['business-advisory-cfo', 'Business Advisory & CFO Services'],
  ['company-secretarial-compliance', 'Company Secretarial & Compliance'],
  ['accounting-systems-digital', 'Accounting Systems & Digital Solutions'],
]) {
  test(`${slug} is preselected and remains editable`, async ({ page }) => {
    await page.goto(`/services/${slug}`, { waitUntil: 'networkidle' });
    const service = page.getByRole('combobox', { name: 'Service Needed' });
    await expect(service).toHaveText(label);
    await choose(page, 'Service Needed', 'Other / General Inquiry');
    await expect(service).toHaveText('Other / General Inquiry');
    const localCTA = page.locator('main').getByRole('link', { name: 'Request a Callback', exact: true });
    await localCTA.click();
    await expect(page).toHaveURL(new RegExp(`/services/${slug}#callback$`));
    await expect(page.getByLabel('Full Name')).toBeInViewport();
    await expect(service).toHaveText('Other / General Inquiry');
  });
}

test('desktop form has no overflow and readable controls', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await contact(page);
  await choose(page, 'Service Needed', 'Accounting Systems & Digital Solutions');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.getByLabel('Full Name')).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'Service Needed' })).toHaveText('Accounting Systems & Digital Solutions');
});
