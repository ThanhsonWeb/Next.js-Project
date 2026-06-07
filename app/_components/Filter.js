"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Button from "./Button";

function Filter() {
	// step 2 : use this custom hook for client component
	//  (cause we can't fetch it like server component)
	const searchParams = useSearchParams();
	const activeFilter = searchParams.get("capacity");

	// step 3 : new hook =))
	const router = useRouter();
	const pathname = usePathname(); // /cabins

	function handleFilter(filter) {
		// step 2.1 set query "capacity"
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);

		// step 3.1
		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}

	return (
		<div className="border border-primary-800 flex  ">
			<Button
				onClick={() => handleFilter("all")}
				filter="all"
				activeFilter={activeFilter}
			>
				All cabins
			</Button>

			<Button
				onClick={() => handleFilter("small")}
				filter="small"
				activeFilter={activeFilter}
			>
				1&mdash; 3 guests
			</Button>

			<Button
				onClick={() => handleFilter("medium")}
				filter="medium"
				activeFilter={activeFilter}
			>
				4&mdash; 7 guests
			</Button>

			<Button
				onClick={() => handleFilter("large")}
				filter="large"
				activeFilter={activeFilter}
			>
				8&mdash; 12 guests
			</Button>
		</div>
	);
}

export default Filter;
