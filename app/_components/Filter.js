"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Filter() {
	// step 2 : use this custom hook for client component
	//  (cause we can't fetch it like server component)
	const searchParams = useSearchParams();
	// step 3 : new hook =))
	const router = useRouter();
	const pathname = usePathname();

	function handleFilter(capacityFilter) {
		// step 2.1 set query "capacity"
		const params = new URLSearchParams(searchParams);
		params.set("capacity", capacityFilter);

		// step 3.1
		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}

	return (
		<div className="border border-primary-800 flex py-3 ">
			<button
				className="px-5 py-2 hover:bg-primary-700"
				onClick={() => handleFilter("all")}
			>
				All Cabins
			</button>
			<button
				className="px-5 py-2 hover:bg-primary-700"
				onClick={() => handleFilter("small")}
			>
				1&mdash; 3 guests
			</button>
			<button
				className="px-5 py-2 hover:bg-primary-700"
				onClick={() => handleFilter("medium")}
			>
				4&mdash; 7 guests
			</button>
			<button
				className="px-5 py-2 hover:bg-primary-700"
				onClick={() => handleFilter("large")}
			>
				8&mdash; 12 guests
			</button>
		</div>
	);
}

export default Filter;
