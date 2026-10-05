# Deploy Ironwood production

**Agent:** forge
**Status:** in-progress
**Priority:** high
**Branch:** forge/deploy-hardening

## Objective
Deploy the site requested by Theo, with working callback persistence.

## Scope
- [ ] Patch the critical Next.js dependency advisory.
- [ ] Pass the public URL to the Docker build.
- [ ] Remove the stale SSH deploy job; Dokploy's GitHub webhook is the deploy owner.
- [ ] Verify public pages and callback persistence.

## Context
Keeper Dokploy application: `CTesSoBarlix-ID280r4P`, app name `clients-ironwoodbc-fb9uet`.
Build Path `/ironwood-website/my-app`; Docker Context Path `ironwood-website/my-app` (relative to repository root, not Build Path).
Shared ParadeDB has a new isolated `ironwoodbc` database and least-privilege `ironwoodbc_app` owner. Credentials are in Dokploy only.

## Acceptance Criteria
Lint/build and CI pass; Dokploy deployment completes; public pages/assets return 200; a labelled QA callback returns 200 and its database row is verified.

## Notes
Apex already reaches the native Dokploy tunnel. `www` has no DNS record. SMTP_PASS is absent, so email delivery is not configured. Optional Sheets logging is disabled.
