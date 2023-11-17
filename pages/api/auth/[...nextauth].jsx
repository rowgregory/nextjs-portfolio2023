import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '../../../prisma/client'
import { VERCEL_BASE } from '../../../public/urls.js'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@aol.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const response = await fetch(`${VERCEL_BASE}/api/user?endpoint=login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })

        if (response.ok) {
          const user = await response.json()

          return user
        } else {
          console.error('User login failed')
        }

        return null
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true }
        })

        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              email: user.email,
              image: user.image,
              name: user.name,
              accounts: {
                create: {
                  providerAccountId: account.providerAccountId,
                  provider: account.provider,
                  type: account.type
                }
              }
            },
            include: { accounts: true }
          })
        } else {
          const isLinked = existingUser.accounts.some(
            (acc) =>
              acc.type === account.type &&
              acc.providerAccountId === account.providerAccountId
          )

          if (!isLinked) {
            await prisma.user.update({
              where: { id: existingUser.id },
              data: {
                accounts: {
                  create: {
                    providerAccountId: account.providerAccountId,
                    provider: account.provider,
                    type: account.type
                  }
                }
              },
              include: { accounts: true }
            })
          }
        }

        return true
      } catch (error) {
        console.error('Error creating or linking account:', error)
      }

      return false
    },
    async session({ session, user, token }) {
      session.credentials = token

      return session
    }
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt'
  }
}

export default NextAuth(authOptions)
