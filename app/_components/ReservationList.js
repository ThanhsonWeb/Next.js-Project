"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
   // b1 
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		bookings,
		() => {},
	);

	async function handleDelete(bookingsId) {
		await deleteReservation(bookingId);
	}

	return (
		<ul className="space-y-6">
			{bookings.map((booking) => (
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
