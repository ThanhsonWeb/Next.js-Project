import Link from "next/Link";
import Navigation from "./components/Navigation";
function Page() {
	return (
		<div>
			<Navigation />

			<h1>Hello</h1>

			<Link href="/cabins"> Move to Cabins </Link>
		</div>
	);
}

export default Page;
