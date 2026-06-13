"use server";
import { revalidatePath } from "next/cache";
import { revalidate } from "../cabins/page";
// we are on the Back end ^^
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
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
	revalidatePath("/account/profile");
	return data;
}
// b1 : delete booking on id
export async function deleteReservation(bookingId) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");
	// b3 : getBookings -> compare all the ids of bookings to 
	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if(!guestBookingIds.includes(bookingId))
		throw new Error("you are not allowed to delete this booking")


	const { error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);
	if (error) throw new Error("Reservation could not be deleted");
	revalidatePath("/account/reservations");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
