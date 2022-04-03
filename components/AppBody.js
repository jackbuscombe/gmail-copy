import BodyTab from "./BodyTab";
import { InboxIcon, UsersIcon, TagIcon, RefreshIcon, DotsVerticalIcon, ChevronDownIcon } from "@heroicons/react/solid";
import EmailItem from "./EmailItem";
import { useStore } from "./appStore";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function AppBody() {
	const selectedCategory = useStore((state) => state.selectedCategory);
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			setEmails(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex items-center pl-6 border-b w-full">
				<input type="checkbox" className="h-4 w-4 hover:bg-gray-500 cursor-pointer" />
				<div className="widget-icon mr-8">
					<ChevronDownIcon className="h-5 w-5 text-gray-500" />
				</div>

				<div className="widget-icon">
					<RefreshIcon className="h-5 w-5 text-gray-500" />
				</div>
				<div className="widget-icon">
					<DotsVerticalIcon className="h-5 w-5 text-gray-500" />
				</div>
			</div>

			<div className="flex flex-row sticky justify-start w-full items-stretch">
				<BodyTab Icon={InboxIcon} title="Primary" subtitle="John Mayer, Fisherboy" newCount="50" color="bg-red-600" selectedColor="text-red-600" borderColor="border-red-600" selected={selectedCategory == "Primary"} />
				<BodyTab Icon={UsersIcon} title="Social" subtitle="John Mayer, Fisherboy" newCount="50" color="bg-blue-600" selectedColor="text-blue-600" borderColor="border-blue-600" selected={selectedCategory == "Social"} />
				<BodyTab Icon={TagIcon} title="Promotions" subtitle="John Mayer, Fisherboy" newCount="50" color="bg-green-600" selectedColor="text-green-600" borderColor="border-green-600" selected={selectedCategory == "Promotions"} />
			</div>

			<div className="flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
				{emails.map(({ id, data: { to, subject, message, timestamp } }) => (
					<EmailItem key={id} id={id} sender={to} subject={subject} content={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
				))}
			</div>
		</div>
	);
}
export default AppBody;
