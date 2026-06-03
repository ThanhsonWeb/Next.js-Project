import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
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
				{/* children = route */}
				<div className="flex-1 px-8 py-12 ">
					<main className="max-w-7xl  mx-auto"> {children}</main>
				</div>
			</body>
		</html>
	);
}
