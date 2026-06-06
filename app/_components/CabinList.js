import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import Spinner from "./Spinner";

async function CabinList({ capacityFilter }) {
	const cabins = await getCabins();
	if (!cabins.length) return null;

	// b3  decide which cabins to display based on maxCapacity
	let displayedCabins;
	if (capacityFilter === "all") displayedCabins = cabins;
	if (capacityFilter === "small")
		displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
	if (capacityFilter === "medium")
		displayedCabins = cabins.filter(
			(cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
		);
	if (capacityFilter === "large")
		displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

	return (
		<div>
			{displayedCabins.length > 0 && (
				<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
					{displayedCabins.map((cabin) => (
						<CabinCard cabin={cabin} key={cabin.id} />
					))}
				</div>
			)}
		</div>
	);
}

export default CabinList;
