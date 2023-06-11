import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../prisma/client';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

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
                  type: account.type,
                },
              },
            },
            include: { accounts: true },
          });
        } else {
          const isLinked = existingUser.accounts.some(
            acc =>
              acc.type === account.type &&
              acc.providerAccountId === account.providerAccountId
          );

          if (!isLinked) {
            await prisma.user.update({
              where: { id: existingUser.id },
              data: {
                accounts: {
                  create: {
                    providerAccountId: account.providerAccountId,
                    provider: account.provider,
                    type: account.type,
                  },
                },
              },
              include: { accounts: true },
            });
          }
        }

        return true; // Account creation and linking successful
      } catch (error) {
        console.error('Error creating or linking account:', error);
      }

      return false; // Account creation and linking failed
    },
  },
};

export default NextAuth(authOptions);
