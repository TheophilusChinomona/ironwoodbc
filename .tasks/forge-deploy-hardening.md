# Deploy Ironwood production

**Agent:** forge
**Status:** done
**Priority:** high
**Branch:** forge/deploy-hardening

## Objective
Deploy the site requested by Theo, with working callback persistence.

## Scope
- [x] Patch the critical Next.js dependency advisory.
- [x] Pass the public URL to the Docker build.
- [x] Remove the stale SSH deploy job; Dokploy's GitHub webhook is the deploy owner.
- [x] Verify public pages and callback persistence.

## Context
Keeper Dokploy application: `CTesSoBarlix-ID280r4P`, app name `clients-ironwoodbc-fb9uet`.
Build Path `/ironwood-website/my-app`; Docker Context Path `ironwood-website/my-app` (relative to repository root, not Build Path).
Shared ParadeDB has a new isolated `ironwoodbc` database and least-privilege `ironwoodbc_app` owner. Credentials are in Dokploy only.

## Acceptance Criteria
Lint/build and CI pass; Dokploy deployment completes; public pages/assets return 200; a labelled QA callback returns 200 and its database row is verified.

## Notes
Apex already reaches the native Dokploy tunnel. `www` has no DNS record. SMTP_PASS is absent, so email delivery is not configured. Optional Sheets logging is disabled.

## Verified production result

- Deployed commit: `504f83969df33286ea0ac743c6b887ae9f44c5e0` (PR #5, after Dockerfile PR #4).
- Dokploy deployment: `DzMERXa60VTlAzCE659oL`, done at `2026-10-05T12:55:10.503Z`; push webhook triggered it automatically.
- CI run `37312740358`: success on the deployed commit.
- All 15 checked public routes (including every sitemap entry, privacy, POPIA, robots and sitemap) and 18 referenced assets returned HTTP 200.
- Homepage title and desktop-browser rendered content: Ironwood Business Consulting.
- Callback API: honeypot 200; invalid payload 400; valid labelled QA payload 200.
- Read the QA row directly from PostgreSQL, then deleted only that row and verified cleanup.
- Running container log and package identify Next.js 16.3.8.
- Critical production dependency findings: 0; remaining baseline findings: 4 high, 2 moderate.
- New database provisioned; no historical lead-data restoration was performed.

## Remaining operator inputs

- Set the Ironwood SMTP password in this keeper application's Dokploy environment and redeploy; confirm an actual lead notification arrives. Do not put the password in chat or Git.
- Configure Cloudflare DNS/routing for `www.ironwoodbc.co.za`, then attach that hostname to this application's port 3000. Apex is already live without a tunnel change.
