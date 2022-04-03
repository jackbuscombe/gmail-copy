import { StarIcon, TagIcon } from "@heroicons/react/outline";
import { StarIcon as FilledStarIcon, TagIcon as FilledTagIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "../components/appStore";

function EmailItem({ id, sender, subject, content, time, read, onClick }) {
	const setSelectedMail = useStore((state) => state.setSelectedMail);
	const [selected, setSelected] = useState(false);
	const router = useRouter();

	const openMail = () => {
		setSelectedMail({
			id: id,
			senderName: sender,
			senderEmailAddress: sender,
			subject: subject,
			content: content,
			time: time,
			read: read,
		});

		router.push(`/mail/${id}`);
	};

	return (
		<div onClick={openMail} className={`flex items-center bg-white ${!selected && "hover:bg-gray-200"} cursor-pointer border-b justify-between px-4 ${read && "bg-gray-100"} ${selected && "bg-blue-200"} overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100`}>
			<div className="flex items-center w-60 mr-4">
				<input checked={selected} onChange={(e) => setSelected(e.target.checked)} className="cursor-pointer hover:bg-gray-500 mr-2 z-40" type="checkbox" />
				<div className="widget-icon">
					<StarIcon className="h-6 w-6 text-gray-500" />
				</div>
				<div className="widget-icon">
					<TagIcon className="h-6 w-6 text-gray-500 mr-4" />
				</div>
				<h3 className={`text-sm font-bold truncate ${read && "font-normal"}`}>{sender}</h3>
			</div>
			<div className="flex flex-grow">
				<h4 className={`text-sm font-bold mr-1 truncate ${read && "font-normal"}`}>{subject}</h4>
				<p className="text-sm text-gray-500 w-52 whitespace-nowrap truncate"> - {content}</p>
			</div>
			<p className={`text-xs font-bold text-black whitespace-nowrap ml-4 ${read && "text-gray-600 font-normal"}`}>{time}</p>
		</div>
	);
}
export default EmailItem;
