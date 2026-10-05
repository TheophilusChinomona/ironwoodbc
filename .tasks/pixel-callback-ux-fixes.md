# Callback UX fixes

**Agent:** pixel
**Status:** in-progress
**Priority:** high
**Branch:** pixel/callback-ux-fixes

## Objective
Fix the six findings from the live adversarial UX review without redesigning the site or weakening validation.

## Scope
- [x] Show visible, accessible submission errors and preserve inputs for retry.
- [x] Land callback CTAs at the contact form, including mobile.
- [x] Normalise ordinary South African phone formatting on client and server.
- [x] Prevent long selected service labels overflowing narrow screens.
- [x] Focus and reveal an accessible success confirmation immediately.
- [x] Preselect the current service in service-page callback forms.
- [x] Add regression tests, run lint/build, and verify actual browser behaviour.

## Context
Production baseline main: 2799fcb83db2b7f6366c0913530a3869af9686f8. Failures reproduced in Chromium: no mounted toast renderer, contact form at y=2084 on 390x844, unnormalised phone regex, intrinsic select width at 320px, confirmation above preserved scroll position, service form with no page context.

## Acceptance Criteria
Every finding has a regression test demonstrated failing before the fix and passing afterwards. Phone validation must still reject malformed letters/invalid numbers. Retry must not discard inputs. Confirmation must be visible, focused, and announced. Desktop remains usable. Service selections remain editable.

## Verification
- Local lint, production build, and 14 validation tests passed.
- Validation tests also passed under Node 22, matching the production image.
- All 16 browser regressions passed: no skips, unexpected failures, or flaky results. Browser QA uses mocked submission responses and cannot establish production email delivery.
- Screenshot inspection confirmed visible mobile arrival, actionable failure feedback, a usable 320px service selector, and unobstructed success feedback.
- Independent review remains pending: the delegated reviewer failed with provider credit-limit HTTP 403; an OpenCode free-tier smoke probe also returned HTTP 403 before review. Neither failure is approval or a code finding. Do not label the commit independently verified.
- Pre-push rerun passed lint, all 14 validation tests, the production build and all 16 browser tests. Added-line security scan reported no matches.

## Notes
Theo explicitly approved committing and pushing the fixes branch after being informed that independent review was unavailable. Keep the PR in draft pending review. Merge and deployment are not authorised. SMTP_PASS is a separate credential blocker; do not touch credentials or client-approved service copy.
