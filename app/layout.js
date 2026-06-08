import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
export const metadata = {
	// title: "The Wild Oasis",
	// %s = title of route
	title: {
		template: "%s | The Wild Oasis",
		default: "Welcome | The Wild Oasis",
	},

	description:
		"Luxurious cabin hotel, located in the heart of the New York, surrounded by beautiful mountains and dark forests",
};
const josefin = Josefin_Sans({
	subsets: ["latins"], // for Eng
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefin.className} bg-primary-950 text-gray-50 min-h-screen flex flex-col  `}
			>
				<Header />
				{/* children = routes */}
				<div className="flex-1 px-8 py-12 ">
					<main className="max-w-7xl  mx-auto">
						{/* b3 : this is the only way to use context API in Next.js */}
						{/* Wrap Server-c in Client-c  ( provide it to our trees )*/}
						<ReservationProvider>{children}</ReservationProvider>
					</main>
				</div>
			</body>
		</html>
	);
}
