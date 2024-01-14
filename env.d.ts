declare namespace NodeJS {
  interface ProcessEnv {
    ENVIRONMENT: 'development' | 'production';
    AUTH_SECRET: string;
    AUTH_GOOGLE_CLIENT_ID: string;
    AUTH_GOOGLE_CLIENT_SECRET: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_FROM: string;
    SMTP_API_KEY: string;
    MONGODB_CONNECTION_STRING: string;
    ATLAS_DATA_API_SOURCE: string;
    ATLAS_DATA_API_ENDPOINT: string;
    ATLAS_DATA_API_KEY: string;
  }
}
