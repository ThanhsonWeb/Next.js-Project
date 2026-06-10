"use server";

import { signIn, signOut } from "./auth";
// this function is always be call on the server
export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
