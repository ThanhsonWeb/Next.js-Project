import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
	return (
		<div className="grid grid-cols-[15rem_1fr]  h-full gap-12 ">
			<SideNavigation />
         {/* children = routes of account  */}
			<div className="py-2">{children}</div>
		</div>
	);
}
