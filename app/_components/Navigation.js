import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
	// b1 fetch auth
	const session = await auth();
	console.log(session);

	return (
		<nav className="z-10 text-xl">
			<ul className="flex gap-16 items-center">
				<li>
					<Link
						href="/cabins"
						className="hover:text-accent-400 transition-colors"
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="hover:text-accent-400 transition-colors"
					>
						About
					</Link>
				</li>
				{/* b2 . display it here */}
				<li>
					{session?.user?.image ? (
						<Link
							href="/account"
							className="hover:text-accent-400 transition-colors flex items-center gap-5  "
						>
							<img
								src={session.user.image}
								alt={session.user.name}
								referrerPolicy="no-referrer"
								className="h-8 rounded-full"
							/>
							<span>Guest area</span>
						</Link>
					) : (
						<Link
							href="/account"
							className="hover:text-accent-400 transition-colors"
						>
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
