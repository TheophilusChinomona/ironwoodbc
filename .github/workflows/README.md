# GitHub Actions

## CI (`ci.yml`)

- **Trigger:** Every push and pull request.
- **Steps:** Install deps → Lint → Build (Next.js) in `ironwood-website/my-app`.
- **No secrets required.**

## Deploy to Dokploy – Production (`deploy.yml`)

- **Trigger:** Push to `main` (after build + lint succeed).
- **Steps:** Build (same as CI) → Trigger deployment via [Dokploy Deploy Action](https://github.com/marketplace/actions/dokploy-deploy).

## Deploy to Dokploy – Staging (`deploy-staging.yml`)

- **Trigger:** Push to `staging` (after build + lint succeed).
- **Steps:** Same as production; deploys to your **staging** application in Dokploy.
- **Setup in Dokploy:** Create a second Application (e.g. “ironwood-website-staging”) in the same or another project, connected to this repo with branch **staging**. This workflow triggers that app’s deployment when the build passes.

### Required repository secrets (production + staging)

| Secret | Description |
|--------|-------------|
| `DOKPLOY_URL` | Dokploy base URL (e.g. `https://dokploy.example.com`). |
| `DOKPLOY_API_KEY` | Dokploy API key (create in Dokploy settings). |

### Optional repository variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DOKPLOY_PROJECT_NAME` | Production Dokploy project name. | `ironwood` |
| `DOKPLOY_APP_NAME` | Production app name. | `ironwood-website` |
| `DOKPLOY_STAGING_PROJECT_NAME` | Staging project (if different). Falls back to `DOKPLOY_PROJECT_NAME`. | same as prod |
| `DOKPLOY_STAGING_APP_NAME` | Staging app name. | `ironwood-website-staging` |

If an app is identified by **Application ID** instead, edit the relevant workflow and replace `project_name` / `app_name` with:

```yaml
application_id: ${{ secrets.DOKPLOY_APPLICATION_ID }}
# or for staging:
application_id: ${{ secrets.DOKPLOY_STAGING_APPLICATION_ID }}
```

### Dokploy + GitHub

You can use both [Dokploy’s GitHub integration](https://docs.dokploy.com/docs/core/github) (GitHub App) and these workflows:

- **Production:** One Application in Dokploy for `main`; either auto-deploy on push or only via this workflow.
- **Staging:** Another Application for branch `staging`; either auto-deploy on push to `staging` or only via `deploy-staging.yml`.
