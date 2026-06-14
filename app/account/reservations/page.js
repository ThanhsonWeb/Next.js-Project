import ReservationCard from "@/app/_components/ReservationCard";
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
	title: "Reservations",
};

export default async function Page() {
	const session = await auth();
	// b1:  get  bookings from exact current guest (by id)
	const bookings = await getBookings(session.user.guestId); //6

	// b2 in supabase -> bookings table -> two rows have guestId is 6

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-7">
				Your reservations
			</h2>

			{/* b3 render those 2 bookings  */}
			{bookings.length === 0 ? (
				<p className="text-lg">
					You have no reservations yet. Check out our s
					<Link className="underline text-accent-500" href="/cabins">
						luxury cabins &rarr;
					</Link>
				</p>
			) : (
				<ReservationList bookings={bookings} />
			)}
		</div>
	);
}
