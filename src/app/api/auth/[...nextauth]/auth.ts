import mongoClientPromise from '@/lib/database/mongoClientPromise';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  ...authConfig,
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  pages: {
    signIn: '/auth',
    signOut: '/auth',
  },
  session: { strategy: 'jwt' }, // comment out for solution 2
});
