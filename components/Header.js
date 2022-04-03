import { MenuIcon, QuestionMarkCircleIcon, CogIcon, DotsVerticalIcon, SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useStore } from "../components/appStore";
import { getAuth, signOut } from "firebase/auth";

function Header() {
	const router = useRouter();
	const auth = getAuth();
	const user = useStore((state) => state.user);
	const setUser = useStore((state) => state.setUser);

	// const signOut = () => {
	// 	signOut(auth)
	// 		.then(() => {
	// 			setUser(null);
	// 		})
	// 		.catch((error) => {
	// 			alert(error);
	// 		});
	// };

	return (
		<div className="sticky top-0 z-50 bg-white flex justify-between items-center p-2 lg:px-6 shadow-sm">
			{/* Nav Left */}
			<div className="flex items-center">
				<div className="widget-icon mr-6">
					<MenuIcon className="h-6 w-6 text-gray-500" />
				</div>
				<Image onClick={() => router.push("/")} src={"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"} alt="" width={120} height={45} layout="fixed" className="cursor-pointer" />
			</div>

			{/* Nav Middle */}

			<div className="flex justify-between h-12 bg-gray-100 p-2 rounded-lg items-center w-1/2">
				<SearchIcon className="h-6 w-6 text-gray-500 mr-4" />
				<input className="flex w-full bg-transparent focus:outline-none" type="text" placeholder="Search mail" />
				<ChevronDownIcon className="h-6 w-6 text-gray-500" />
			</div>

			{/* Nav Right */}
			<div className="flex justify-between space-x-5 items-center">
				<div className="widget-icon">
					<QuestionMarkCircleIcon className="w-6 h-6 text-gray-500" />
				</div>
				<div className="widget-icon">
					<CogIcon className="w-6 h-6 text-gray-500" />
				</div>
				<div className="widget-icon">
					<DotsVerticalIcon className="w-6 h-6 text-gray-500" />
				</div>
				<div
					onClick={() => {
						signOut(auth);
						setUser(null);
					}}
					className="widget-icon"
				>
					<img className="w-8 h-8 rounded-full" src={user?.photoUrl} alt="" />
				</div>
			</div>
		</div>
	);
}
export default Header;
