"use server";

// this function is always be call on the server
import { signIn, signOut } from "./auth";
// b4.1
export async function UpdateGuest() {
	console.log("server action");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
