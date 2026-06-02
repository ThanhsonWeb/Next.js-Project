// trick
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
export const metadata = {
	title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Logo />
					<Navigation />
				</header>
				{/* children = the page of the route */}
				<main>{children}</main>
				<footer>Copy by The Wild Oasis</footer>
			</body>
		</html>
	);
}
