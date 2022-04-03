import { PlusIcon, InboxIcon, StarIcon, ClockIcon, TicketIcon, PaperAirplaneIcon, TagIcon, DocumentIcon, VideoCameraIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import SidebarOption from "./SidebarOption";
import { useStore } from "./appStore";

function Sidebar() {
	const selectedMailbox = useStore((state) => state.selectedMailbox);
	const setSendMessageIsOpen = useStore((state) => state.setSendMessageIsOpen);

	return (
		<div className="flex flex-col w-1/5">
			<div onClick={() => setSendMessageIsOpen(true)} className="flex bg-white rounded-full border shadow-md w-fit px-4 py-2 ml-2 my-4 hover:bg-gray-50 hover:shadow-lg cursor-pointer active:bg-gray-200">
				<PlusIcon className="h-6 w-6 mr-2" />
				<h4 className="text-gray-700 font-semibold">Compose</h4>
			</div>

			<div className="h-56 overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 shadow-sm">
				<SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={selectedMailbox == "Inbox"} className="mailbox-option" />
				<SidebarOption Icon={StarIcon} title="Starred" number={12} selected={selectedMailbox == "Starred"} className="mailbox-option" />
				<SidebarOption Icon={ClockIcon} title="Snoozed" number={1} selected={selectedMailbox == "Snoozed"} className="mailbox-option" />
				<SidebarOption Icon={TicketIcon} title="Important" number={98} selected={selectedMailbox == "Important"} className="mailbox-option" />
				<SidebarOption Icon={PaperAirplaneIcon} title="Sent" selected={selectedMailbox == "Sent"} className="mailbox-option" />
				<SidebarOption Icon={DocumentIcon} title="Drafts" selected={selectedMailbox == "Categories"} className="mailbox-option" />
			</div>

			<div className="border-b pb-2">
				<h4 className="text-sm font-semibold ml-6 mt-3">Meet</h4>
				<SidebarOption Icon={VideoCameraIcon} title="New meeting" className="mailbox-option" />
				<SidebarOption Icon={DesktopComputerIcon} title="Join a meeting" className="mailbox-option" />
			</div>

			<div className="border-b pb-2">
				<h4 className="text-sm font-semibold ml-6 mt-3">Hangouts</h4>
				<SidebarOption Icon={VideoCameraIcon} title="New meeting" className="mailbox-option" />
				<SidebarOption Icon={DesktopComputerIcon} title="Join a meeting" className="mailbox-option" />
			</div>
		</div>
	);
}
export default Sidebar;
