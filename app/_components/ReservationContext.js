"use client";

import { createContext, useContext } from "react";
// b1  create
const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
	const [range, setRange] = useState();

	return (
		// b2 : pass these  value to our Client-c
		<ReservationContext.Provider value={{ range, setRange }}>
			{children}
		</ReservationContext.Provider>
	);
}

// b3

function useReservation() {
	const context = useContext(ReservationContext);
	if (!context)
		throw new Error("context should use inside ReservationProvider");
	return context;
}

export { useReservation, ReservationProvider };
