import "../styles/globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import SendMail from "../components/SendMail";
import { useStore } from "../components/appStore";
import Login from "../components/Login";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }) {
	const sendMessageIsOpen = useStore((state) => state.sendMessageIsOpen);
	const setUser = useStore((state) => state.setUser);
	const user = useStore((state) => state.user);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					displayName: user.displayName,
					email: user.email,
					photoUrl: user.photoURL,
				});
			} else {
				// User is signed out
				// ...
			}
		});
	}, []);

	return (
		<div className="h-screen overflow-y-hidden">
			{!user ? (
				<Login />
			) : (
				<div className="">
					<Header />

					<div className="flex flex-row justify-between">
						<Sidebar />
						<Component {...pageProps} />
						<Widgets />
					</div>
					{sendMessageIsOpen && <SendMail />}
				</div>
			)}
		</div>
	);
}

export default MyApp;
