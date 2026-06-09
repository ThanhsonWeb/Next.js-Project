import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	pages: {
		signIn: "/login", // custom login page
	},
	callbacks: {
		authorized({ auth }) {
			// Allow access only if user is logged in
			return !!auth?.user;
		},
	},
};

export const {
	auth,
	signIn,
	handlers: { GET, POST },
} = NextAuth(authConfig);
