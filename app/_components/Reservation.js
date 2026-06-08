import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
	// optimize time loading
	const [settings, bookedDates] = await Promise.all([
		getSettings(), // 2s
		getBookedDatesByCabinId(cabin.id),
	]);

	return (
		<div className="grid sm:grid-cols-1  md:grid-cols-2 border border-primary-800  min-h-[400px] ">
			{/* b1: pass as prop */}
			<DateSelector
				cabin={cabin}
				settings={settings}
				bookedDates={bookedDates}
			/>
			<ReservationForm cabin={cabin} />
		</div>
	);
}

export default Reservation;
