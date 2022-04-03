import { CalendarIcon, LightBulbIcon, CheckCircleIcon, UserCircleIcon, PlusIcon } from "@heroicons/react/outline";

function Widgets() {
	return (
		<div className="justify-self-end border-l px-4">
			<div className="border-b">
				<div className="widget-icon my-3">
					<CalendarIcon className="h-6 w-6 text-green-600" />
				</div>
				<div className="widget-icon my-3">
					<LightBulbIcon className="h-6 w-6 text-yellow-500" />
				</div>
				<div className="widget-icon my-3">
					<CheckCircleIcon className="h-6 w-6 text-blue-600" />
				</div>
				<div className="widget-icon my-3">
					<UserCircleIcon className="h-6 w-6 text-blue-600" />
				</div>
			</div>
			<div className="widget-icon my-3">
				<PlusIcon className="h-6 w-6 text-gray-500" />
			</div>
		</div>
	);
}
export default Widgets;
