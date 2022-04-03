import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStore } from "../components/appStore";

function Login() {
	const setUser = useStore((state) => state.setUser);
	const auth = getAuth();

	const signIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				setUser({
					displayName: result.user.displayName,
					email: result.user.email,
					photoUrl: result.user.photoURL,
				});
			})
			.catch((error) => {
				alert("Error Logging In", error.message);
			});
	};

	return (
		<div className="grid bg-gray-200 h-screen place-items-center">
			<div className="flex flex-col">
				<img className="object-contain h-24 mb-8" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt="" />
				<button className="p-2 rounded-md bg-red-700 text-white" onClick={signIn}>
					LOGIN
				</button>
			</div>
		</div>
	);
}
export default Login;
