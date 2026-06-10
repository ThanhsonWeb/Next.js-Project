import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth }) {
			// Allow access only if user is logged in
			return !!auth?.user;
		},
		// b1 : create new callbacks
		async SignIn({ user, account, profile }) {
			try {
				const existingGuest = await getGuest(user.email);

				if (!existingGuest)
					await createGuest({ email: user.email, fullName: user.name });

				return true; // allow login
			} catch {
				return false; // block login if error
			}
		},
	},
};

export const {
	auth,
	signOut,
	signIn,
	handlers: { GET, POST },
} = NextAuth(authConfig);
