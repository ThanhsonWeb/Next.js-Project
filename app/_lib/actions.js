"use server";
import { revalidatePath } from "next/cache";
import { revalidate } from "../cabins/page";
// we are on the Back end ^^
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";
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
export async function deleteReservation(bookingId) {
	// Authentication
	const session = await auth();
	if (!session) throw new Error("You must be logged in");
	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId))
		throw new Error("you are not allowed to delete this booking");

	const { error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);
	if (error) throw new Error("Reservation could not be deleted");
	revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
	// Authentication
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	// b3 : extract from "formData"
	const bookingId = Number(formData.get("bookingId"));
	const numGuests = Number(formData.get("numGuests"));
	const observations = formData.get("observations").slice(0, 1000);

	const updateBooking = { numGuests, observations };
	console.log(updateBooking);
	// b4 : actually update to supabase (Mutation)
	const { error } = await supabase
		.from("bookings")
		.update(updateBooking)
		.eq("id", bookingId);
	// error handling
	if (error) throw new Error("Could not update Booking");
	// revalidatePath
	revalidatePath("/account/reservations");

	//  redirecting
	redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
	// Authentication
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const newBooking = {
		...bookingData,
		guestId: session.user.guestId,
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations").slice(0, 1000),
		extrasPrice: 0,
		totalPrice: bookingData.cabinPrice,
		isPaid: false,
		hasBreakfast: false,
		status: "unconfirmed",
	};

	console.log(newBooking);

	const { error } = await supabase.from("bookings").insert([newBooking]);

	if (error) throw new Error("Could not create a new Booking :(");

	// b3
	revalidatePath(`/cabins/${bookingData.cabinId}`);
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
