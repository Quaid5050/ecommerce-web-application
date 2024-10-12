
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { handleExistingAccessToken, fetchBackendForUser, setAccessTokenCookie } from "@/lib/utils";
import { authConfig } from './auth.config';
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: "offline",
                    response_type: "code",
                },
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    await handleExistingAccessToken();

                    const response = await fetchBackendForUser(user, account.providerAccountId, account.provider);

                    const data = await response.json();
                    // console.log(data);
                    if (response.ok && data?.user) {
                        user.id = data.user.id;
                        //@ts-ignore
                        user.token = data.accessToken;
                        setAccessTokenCookie(data.accessToken, data.token_expiry);
                        return true;
                    } else {
                        console.error("Error during signIn:", data);
                        return false;
                    }
                } catch (error) {
                    console.error('Error during signIn:', error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, account, user }) {
            if (account) {
                // @ts-ignore
                token.access_token = user.token;
                token.userId = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // @ts-ignore
            session.userId = token.userId;
            // @ts-ignore
            session.accessToken = token.access_token;
            return session;
        },
    },
});
