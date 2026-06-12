"use server";
import { revalidatePath } from "next/cache";
import { revalidate } from "../cabins/page";
// we are on the Back end ^^
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
// b5 : form submit -> Nextjs send formData to SA
export async function UpdateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");
	// b5.1 : get value base on name of form
	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	const updateData = { nationalID, nationality, countryFlag };
	console.log(updateData);
	// b6 : Supabase updates the "guests table" for the current user:
	const { data, error } = await supabase
		.from("guests")
		.update(updateData)
		.eq("id", session.user.guestId);

	if (error) throw new Error("Guest could not be updated");
	return data;
	//  refesh the page
	revalidatePath("/account/profile");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
