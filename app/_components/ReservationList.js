"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
	// b1 :  useOptimistic :  for delete , update ,.. immediately -> better UX
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		bookings,
		(curBookings, bookingId) => {
			return curBookings.filter((booking) => booking.id !== bookingId);
		},
	);
	// click on "Delete" button -> do this
	async function handleDelete(bookingId) {
		optimisticDelete(bookingId); // update UI instantly
		await deleteReservation(bookingId); // wait until server confirms
	}

	return (
		<ul className="space-y-6">
			{optimisticBookings.map((booking) => (
				<ReservationCard
					booking={booking}
					key={booking.id}
					onDelete={handleDelete}
				/>
			))}
		</ul>
	);
}

export default ReservationList;
