import { StarIcon, TagIcon as TagOutline } from "@heroicons/react/outline";
import { ArrowLeftIcon, InboxInIcon, ExclamationIcon, TrashIcon, MailOpenIcon, ClockIcon, BadgeCheckIcon, FolderAddIcon, TagIcon, DotsVerticalIcon, ChevronLeftIcon, ChevronRightIcon, XIcon, PrinterIcon, ExternalLinkIcon, ShareIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useStore } from "../../components/appStore";

function Mail({ id, senderName, senderEmailAddress, subject, content, time, read }) {
	const router = useRouter();
	const selectedMail = useStore((state) => state.selectedMail);

	// useEffect(() => {
	// 	const { id } = router.query;

	// 	const getEmailContents = async () => {
	// 		const docRef = doc(db, "emails", id);
	// 		const docSnap = await getDoc(docRef);
	// 	};

	// 	getEmailContents();
	// }, []);
	return (
		<div className="flex flex-col ml-4 justify-start flex-grow">
			{/* Icons Line */}
			<div className="flex border-b py-3 justify-between">
				<div className="flex items-center">
					<div className="flex border-r mr-5">
						<div className="widget-icon mr-5" onClick={() => router.push("/")}>
							<ArrowLeftIcon className="h-5 w-5 text-gray-500" />
						</div>
						<div className="widget-icon mr-5">
							<InboxInIcon className="h-5 w-5 text-gray-500" />
						</div>
						<div className="widget-icon mr-5">
							<ExclamationIcon className="h-5 w-5 text-gray-500" />
						</div>
						<div className="widget-icon mr-5">
							<TrashIcon className="h-5 w-5 text-gray-500" />
						</div>
					</div>
					<div className="flex border-r mr-5">
						<div className="widget-icon mr-5">
							<MailOpenIcon className="h-5 w-5 text-gray-500" />
						</div>
						<div className="widget-icon mr-5">
							<ClockIcon className="h-5 w-5 text-gray-500" />
						</div>
						<div className="widget-icon mr-5">
							<BadgeCheckIcon className="h-5 w-5 text-gray-500" />
						</div>
					</div>
					<div className="widget-icon mr-5">
						<FolderAddIcon className="h-5 w-5 text-gray-500" />
					</div>
					<div className="widget-icon mr-5">
						<TagIcon className="h-5 w-5 text-gray-500" />
					</div>
					<div className="widget-icon mr-5">
						<DotsVerticalIcon className="h-5 w-5 text-gray-500" />
					</div>
				</div>
				<div className="flex items-center">
					<p className="text-gray-500 text-sm mr-2">1 of 14,124</p>
					<div className="widget-icon mr-2">
						<ChevronLeftIcon className="h-5 w-5 text-gray-500" />
					</div>
					<div className="widget-icon mr-5">
						<ChevronRightIcon className="h-5 w-5 text-gray-500" />
					</div>
				</div>
			</div>

			<div className="overflow-y-scroll h-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-gray-50 pt-4 px-4">
				<div className="flex flex-col w-full h-full bg-white drop-shadow-2xl px-4">
					{/* Subject Line */}
					<div className="flex my-4 ml-12 justify-between">
						<div className="flex justify-start items-center">
							<h2 className="text-xl mr-4">{selectedMail?.subject}</h2>
							<div className="widget-icon mr-5">
								<TagOutline className="h-5 w-5 text-gray-500" />
							</div>
							<div className="flex items-center text-xs justify-around w-14 bg-gray-200 rounded-md p-0.5 hover:bg-gray-400">
								Inbox <XIcon className="h-2 w-2 cursor-pointer" />
							</div>
						</div>
						<div className="flex items-center">
							<div className="widget-icon mr-5">
								<PrinterIcon className="h-5 w-5 text-gray-500" />
							</div>
							<div className="widget-icon mr-5">
								<ExternalLinkIcon className="h-5 w-5 text-gray-500" />
							</div>
						</div>
					</div>

					{/* Sender Line */}
					<div className="flex justify-between items-center mb-6">
						<div className="flex items-center">
							<div className="widget-icon mr-2">
								<img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/ogw/ADea4I6HZOVbZagsdcOtwLv9kZ3JLUvdY1OH3-sbxYcK=s64-c-mo" alt="" />
							</div>
							<div className="">
								<div className="flex items-center">
									<h3 className="font-bold text-sm mr-2">{selectedMail?.senderName}</h3>
									<h4 className="text-gray-500 text-xs mr-2">{selectedMail?.senderEmailAddress}</h4>
									<p className="text-gray-500 underline text-xs cursor-pointer">Unsubscribe</p>
								</div>
								<p className="text-xs text-gray-500">to me</p>
							</div>
						</div>
						<div className="flex items-center">
							<p className="text-xs text-gray-500 mr-4">{selectedMail?.time}</p>
							<div className="widget-icon mr-5">
								<StarIcon className="h-5 w-5 text-gray-500" />
							</div>
							<div className="widget-icon mr-5">
								<ShareIcon className="h-5 w-5 text-gray-500" />
							</div>
							<div className="widget-icon mr-5">
								<DotsVerticalIcon className="h-5 w-5 text-gray-500" />
							</div>
						</div>
					</div>

					{/* Email Content */}
					<div className="mx-14">
						<div className="text-sm">{selectedMail?.content}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Mail;
