import { XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useStore } from "../components/appStore";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
	const setSendMessageIsOpen = useStore((state) => state.setSendMessageIsOpen);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (formData) => {
		console.log(formData);
		const docRef = await addDoc(collection(db, "emails"), {
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: serverTimestamp(),
		});

		setSendMessageIsOpen(false);
	};
	return (
		<div className="absolute flex flex-col bottom-0 right-56 bg-gray-700 h-2/3 w-1/3 max-w-6xl rounded-t-lg shadow-2xl">
			<div className="flex justify-between items-center p-3 text-white font-semibold">
				<h3 className="">New Message</h3>
				<XIcon onClick={() => setSendMessageIsOpen(false)} className="h-3 w-3 cursor-pointer text-gray-500 hover:text-white" />
			</div>

			<form className="flex flex-col flex-grow bg-white" onSubmit={handleSubmit(onSubmit)}>
				<input {...register("to", { required: true })} type="email" placeholder="To" className="px-4 border-y py-2 outline-none" />
				{errors.to && <p className="text-red-500">A recipient is required!</p>}
				<input {...register("subject", { required: true })} type="text" placeholder="Subject" className="px-4 border-y py-2 outline-none" />
				{errors.subject && <p className="text-red-500">A subject is required!</p>}
				<textarea name="message" {...register("message", { required: true })} type="text" placeholder="Message" className="px-4 h-full flex-grow border-y py-2 outline-none" />
				{errors.message && <p className="text-red-500">A message is required!</p>}

				<div className="p-2">
					<button type="submit" className="bg-blue-600 rounded-md text-white font-bold px-4 py-2">
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
export default SendMail;
