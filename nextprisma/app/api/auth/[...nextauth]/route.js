import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authorizeUser } from '../../../../lib/auth-functions/customAuth'
import { updateUser } from '../../../../lib/prisma/crud'
export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null // tell next auth NO ERROR just user mistake
        }

        return await authorizeUser(credentials)
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      // if user being updated by client
      if (trigger === 'update' && session) {
        //? validate
        if (session.volume) {
          token.volume = session.volume
        }
        if (session.autoPlay) {
          token.autoPlay = session.autoPlay
        }
        if (session.name) {
          token.name = session.name
          //user.name = session.name;
        }
        if (session.phoneNumber) {
          token.phoneNumber = session.phoneNumber
          //user.phoneNumber = session.phoneNumber;
        }
        if (session.phonePreferences) {
          token.phonePreferences = session.phonePreferences
          //user.phonePreferences = session.phonePreferences;
        }

        if (session.emailPreferences) {
          token.phoneEmailPreferences = session.emailPreferences
          //user.phoneEmailPreferences = session.emailPreferences;
        }

        await updateUser(token.email, {
          name: token.name,
          volume: token.volume,
          autoPlay: token.autoPlay,
          phoneNumber: token.phoneNumber,
          phonePreferences: token.phonePreferences,
          emailPreferences: token.emailPreferences,
        })
      }

      // Persist the OAuth access_token to the token right after signin
      if (user) {
        return {
          ...token,
          ...user,
        }
      }
      return token
    },
    async session({ session, token, user }) {
      // pass info to the session and return the updated session

      // Send properties to the client, like an access_token from a provider.

      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          volume: token.volume,
          autoPlay: token.autoPlay,
          email: token.email,
          phoneNumber: token.phoneNumber,
          subscriptionType: token.subscriptionType,
          hasFreePaper: token.hasFreePaper,
          whichFreePaper: token.whichFreePaper,
          subscribedAt: token.subscribedAt,
          endSubscriptionDate: token.endSubscriptionDate,
          emailPreferences: token.emailPreferences,
          phonePreferences: token.phonePreferences,
        },
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
