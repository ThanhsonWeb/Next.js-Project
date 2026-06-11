"use server";
// we are on the Back end ^^
import { auth, signIn, signOut } from "./auth";
// form submit -> Nextjs send formData to SA
export async function UpdateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");
	// get value base on name
	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	const updateData = { nationalID, nationality, countryFlag };
	console.log(updateData);
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
