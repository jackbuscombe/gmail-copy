import { useStore } from "./appStore";

function SidebarOption({ Icon, title, number, selected }) {
	const setSelectedMailbox = useStore((state) => state.setSelectedMailbox);

	return (
		<div value={title} onClick={() => setSelectedMailbox(title)} className={`flex items-center justify-between text-sm ${!selected && "hover:bg-gray-50"} cursor-pointer p-2 px-6 rounded-r-full active:bg-gray-200 ${selected && "bg-red-100"} group`}>
			<div className="flex items-center">
				<Icon className={`h-6 w-6 mr-3 text-gray-500 ${selected && "text-red-500"}`} />
				<h4 className={`group-hover:text-red-600 group-hover:font-semibold ${selected && "text-red-600 font-bold"}`}>{title}</h4>
			</div>
			<p className={`justify-self-end text-xs group-hover:text-red-600 group-hover:font-semibold ${selected && "text-red-600 font-bold"}`}>{number}</p>
		</div>
	);
}
export default SidebarOption;
