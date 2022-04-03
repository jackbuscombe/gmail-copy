import { useStore } from "./appStore";

function BodyTab({ Icon, title, subtitle, newCount, color, selected, selectedColor, borderColor, onClick }) {
	const setSelectedCategory = useStore((state) => state.setSelectedCategory);

	return (
		<div className={`flex w-64 bg-white hover:bg-gray-50 py-3 px-6 cursor-pointer items-center ${selected && `border-b ${borderColor}`}`} onClick={() => setSelectedCategory(title)}>
			<Icon className={`h-6 w-6 text-gray-500 mr-4 ${selected && `${selectedColor}`}`} />
			<div>
				<div className="flex items-center">
					<h4 className={`text-sm font-semibold text-gray-600 mr-4 ${selected && `${selectedColor}`}`}>{title}</h4>
					<div className={`text-white font-semibold text-xs ${color} rounded-full px-1 ${selected && "hidden"}`}>{newCount} new</div>
				</div>
				<p className={`text-gray-400 text-xs ${selected && "hidden"}`}>{subtitle}</p>
			</div>
		</div>
	);
}
export default BodyTab;
