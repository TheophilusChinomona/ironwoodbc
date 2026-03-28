# IronwoodBC — Agent & Infrastructure Notes

## Database

- **Provider:** Dokploy-managed PostgreSQL (self-hosted)
- **Service name:** `ironwoodbc-db` (`appName: ironwoodbc-db-xivjhb`)
- **Database:** `ironwoodbc`
- **User:** `ironwoodbc_app`
- **Internal hostname:** `ironwoodbc-db-xivjhb` (Docker Swarm, resolves within Dokploy network)
- **External port:** `5433` on `102.209.118.123` (for local dev only)

### Connection strings

| Context | DATABASE_URL |
|---------|-------------|
| Production (Dokploy) | `postgresql://ironwoodbc_app:<password>@ironwoodbc-db-xivjhb:5432/ironwoodbc` |
| Local dev | `postgresql://ironwoodbc_app:<password>@102.209.118.123:5433/ironwoodbc` |

> Note: `#` in the password must be URL-encoded as `%23` in the connection string.

### Schema

#### `callback_submissions`

Stores all callback request form submissions from the website.

| Column | Type | Notes |
|--------|------|-------|
| `id` | `uuid` | Primary key, auto-generated |
| `full_name` | `text` | Required |
| `phone` | `text` | Required |
| `email` | `text` | Optional |
| `client_type` | `text` | `individual` or `business` |
| `service` | `text` | Service slug (e.g. `accounting-financial-reporting`) |
| `best_time` | `text` | `morning`, `afternoon`, or `evening` |
| `message` | `text` | Optional |
| `status` | `text` | `new` → `contacted` → `closed` |
| `created_at` | `timestamptz` | Auto-set to `now()` |

## Callback Form API (`/api/callback`)

Runs three operations in parallel on submission:

1. **DB save** (`saveSubmission`) — primary; returns 500 if this fails
2. **Google Sheets append** (`appendToSheet`) — best-effort; logged on failure
3. **Email notification** (`sendCallbackEmail`) — best-effort; logged on failure

## Environment Variables

| Variable | Where set | Purpose |
|----------|-----------|---------|
| `DATABASE_URL` | `.env.local` / Dokploy env | PostgreSQL connection |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Dokploy env | Google Sheets logging (optional) |
| `GOOGLE_SHEETS_ID` | Dokploy env | Target spreadsheet (optional) |
| `SMTP_*` / email vars | Dokploy env | Email notifications |

## Dokploy Project

- **Project:** Ironwood Business Consulting (`8FBsixcwL9tCKIlWvPhRB`)
- **Environment:** production (`H5tFrxMyyhaSmRnFt-inA`)
- **App:** `ironwood-business-consulting-frontend-cdvv6k` (`g9H3njg1-vNp3eHMIuP-3`)
- **Panel:** https://panel.theochinomona.tech
