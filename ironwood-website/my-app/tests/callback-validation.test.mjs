import assert from 'node:assert/strict';
import { test } from 'node:test';
import { callbackFormSchema } from '../lib/validations/callback-form.ts';

const payload = {
  fullName: 'QA Callback Test', phone: '0820000000', email: '',
  clientType: 'business', service: 'tax-services', bestTime: 'morning', consent: true,
};

for (const [phone, expected] of [
  ['0820000000', '0820000000'],
  ['+27820000000', '+27820000000'],
  [' 082 000 0000 ', '0820000000'],
  ['082-000-0000', '0820000000'],
  ['+27 (82) 000-0000', '+27820000000'],
]) {
  test(`normalises accepted phone formatting: ${phone}`, () => {
    const result = callbackFormSchema.safeParse({ ...payload, phone });
    assert.equal(result.success, true);
    assert.equal(result.data.phone, expected);
  });
}

for (const phone of ['082abc0000', '082/000/0000', '082000000', '08200000000', '+44820000000', '0920000000', '']) {
  test(`rejects malformed phone: ${phone}`, () => {
    assert.equal(callbackFormSchema.safeParse({ ...payload, phone }).success, false);
  });
}

test('still requires consent', () => {
  assert.equal(callbackFormSchema.safeParse({ ...payload, consent: false }).success, false);
});
test('still rejects unknown service values', () => {
  assert.equal(callbackFormSchema.safeParse({ ...payload, service: 'unknown' }).success, false);
});
