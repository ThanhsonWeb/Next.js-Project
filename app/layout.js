// trick to access
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
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

import "@/app/_styles/globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-primary-950 text-gray-50 min-h-screen ">
				<header>
					<Logo />
					<Navigation />
				</header>
				<main>{children}</main>
				<footer>Copy by The Wild Oasis </footer>
			</body>
		</html>
	);
}
