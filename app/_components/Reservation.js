import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
	// b1 : fetch user information
	const session = await auth();

	// optimize time loading
	const [settings, bookedDates] = await Promise.all([
		getSettings(), // 2s
		getBookedDatesByCabinId(cabin.id),
	]);

	return (
		<div className="grid sm:grid-cols-1  md:grid-cols-2 border border-primary-800  min-h-[400px] ">
		
			<DateSelector   
				cabin={cabin}
				settings={settings}
				bookedDates={bookedDates}
			/>
			{/* b2 : display and pass as a prop */}
			{session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
		</div>
	);
}

export default Reservation;
