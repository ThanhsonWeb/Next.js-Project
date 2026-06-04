import Spinner from "@/app/_components/Spinner";

// just for cabins route 
export default function Loading() {
	return (
		<div className="grid items-center justify-center">
			<Spinner />
         <p className="text-xl text-primary-300">Loading Cabin data .....</p>
		</div>
	);
}
