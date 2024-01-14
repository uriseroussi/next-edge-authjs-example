import { NextAuthConfig } from 'next-auth';
import { Provider, SendVerificationRequestParams } from 'next-auth/providers';
import Google from 'next-auth/providers/google';

export const authConfig = {
  providers: [
    Google,
    {
      id: 'brevo',
      type: 'email',
      async sendVerificationRequest({
        identifier: email,
        url,
      }: SendVerificationRequestParams) {
        // Call the cloud Email provider API for sending emails
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          // The body format will vary depending on provider, please see their documentation
          // for further details.
          body: JSON.stringify({
            sender: {
              name: 'NextAuthExample',
              email: `${process.env.SMTP_FROM}`,
            },
            to: [
              {
                email,
              },
            ],
            subject: 'Sign in to Your page',
            htmlContent: `<html><head></head><body><p>Click to <a href="${url}">login</a></p></body></html>`,
          }),
          // Authentication will also vary from provider to provider, please see their docs.
          headers: {
            'api-key': `${process.env.SMTP_API_KEY}`,
            'content-type': 'application/json',
            accept: 'application/json',
          },
          method: 'POST',
        });

        if (!response.ok) {
          const { errors } = await response.json();
          throw new Error(JSON.stringify(errors));
        }
      },
    } as unknown as Provider,
  ],
} satisfies NextAuthConfig;
