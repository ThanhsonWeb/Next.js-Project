import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
// "npm  run prod" to see changes : build and start 
//  b1 :make static -> dynamic

// this is Partial Pre- rendering
// middle ground to control time value changed 
// export const revalidate = 3600; // by seconds
export const revalidate = 15;

export const metadata = {
	title: "Cabins",
};

export default function Page() {
	return (
		<div>
			<h1 className="text-4xl mb-5 text-accent-400 font-medium">
				Our Luxury Cabins
			</h1>
			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature's beauty in your own little home
				away from home. The perfect spot for a peaceful, calm vacation. Welcome
				to paradise.
			</p>
			{/* b1 */}
			<Suspense fallback={<Spinner />}>
				<CabinList />
			</Suspense>
		</div>
	);
}
// server component
// 1. go to cabin page -> take some time to fetch data from the server
// 2. ->  send it to the browser -> client no need to fetch !
