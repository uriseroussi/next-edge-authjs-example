# Next Auth.js Example

This is an example of how to use Auth.js in Next.js for OAuth and Magic Link authentication on the Edge runtime.

## Install dependencies

```bash
npm install
```

## Add .env

```
# Environment
ENVIRONMENT="development"

# Database
MONGODB_CONNECTION_STRING="your-mongodb-connection-string"
ATLAS_DATA_API_SOURCE="your-atlas-data-source-name"
ATLAS_DATA_API_ENDPOINT="your-atlas-data-api-endpoint-url"
ATLAS_DATA_API_KEY="your-atlas-data-api-key"

# Auth.js
AUTH_SECRET="your-at-least-32-characters-long-secret"
AUTH_GOOGLE_ID="your-client-id"
AUTH_GOOGLE_SECRET="your-client-secret"

# Brevo SMTP
SMTP_USER="your-brevo-user"
SMTP_PASSWORD="your-brevo-key"
SMTP_HOST=smtp-relay.sendinblue.com
SMTP_PORT=587
SMTP_FROM="your-verified-sender"
SMTP_API_KEY="your-api-key"
```

## Run

```bash
npm run dev
```
