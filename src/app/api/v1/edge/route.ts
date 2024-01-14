import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from '../../auth/[...nextauth]/auth.config';
import { NextApiRequest, NextApiResponse } from 'next';

// set runtime to Edge
export const runtime = 'edge';

/**
 * SOLUTION 1: CHANGING TO JWT STRATEGY WITH A DATABASE
 */
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { auth } = NextAuth(authConfig);

  const session = auth(req, res);

  if (!session) {
    return NextResponse.json({ error: 'not signed in' }, { status: 401 });
  }

  return NextResponse.json({ data: 'you got it' }, { status: 200 });
}

/**
 * SOLUTION 2: MANUALLY VERIFYING SESSION
 * You may comment out the JWT session strategy in the auth config
 */
// export async function GET() {
//   const sessionToken = getSessionToken();
//   const isSessionValid = await verifySessionToken(sessionToken);

//   if (!isSessionValid) {
//     return NextResponse.json({ error: 'not signed in' }, { status: 401 });
//   }

//   return NextResponse.json({ data: 'you got it' }, { status: 200 });
// }

// function getSessionToken() {
//   if (process.env.ENVIRONMENT === 'development') {
//     return cookies().get('authjs.session-token');
//   }
//   if (process.env.ENVIRONMENT === 'production') {
//     return cookies().get('__Secure-authjs.session-token');
//   }
//   return null;
// }

// interface GetSessionResponse {
//   document: {
//     _id: string;
//     sessionToken: string;
//     userId: string;
//     expires: string;
//   };
// }

// async function verifySessionToken(
//   sessionToken: RequestCookie | null | undefined
// ) {
//   if (!sessionToken) return false;

//   try {
//     const sessionRequest = await fetch(
//       `${process.env.ATLAS_DATA_API_ENDPOINT}/action/findOne`,
//       {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           apiKey: process.env.ATLAS_DATA_API_KEY,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           dataSource: process.env.ATLAS_DATA_API_SOURCE,
//           database: process.env.ENVIRONMENT,
//           collection: 'sessions',
//           filter: { sessionToken: sessionToken.value },
//         }),
//       }
//     );

//     if (sessionRequest.status !== 200) return false;

//     const sessionResponse = (await sessionRequest.json()) as GetSessionResponse;
//     const session = sessionResponse.document;

//     if (new Date(session.expires).getTime() < Date.now()) return false;
//   } catch (err) {
//     console.log(err);
//     return false;
//   }

//   return true;
// }
