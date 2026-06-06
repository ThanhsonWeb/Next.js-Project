import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const revalidate = 15;

export const metadata = {
	title: "Cabins",
};

export default async function Page({ searchParams }) {
	const query = await searchParams;
	// b1. searchParams to take value of "capacity" from URL
	// value = "small" , "medium" , "large" or "all"
	const capacityFilter = query?.capacity ?? "all";

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
			{/* step 1 : use it */}
			<div className="flex justify-end mb-8">
				<Filter />
			</div>
			<Suspense fallback={<Spinner />}>
				{/* b2  pass as prop */}
				<CabinList capacityFilter={capacityFilter} />
			</Suspense>
		</div>
	);
}
