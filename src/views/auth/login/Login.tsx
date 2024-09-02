import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { user } from "../../../services/reducers/test";

export default function Login() {
	const userName = useAppSelector((state) => state.test.user);
	const dispatch = useAppDispatch();

	const [isUserDefined, setIsUserDefined] = useState(false);

	const setUser = () => {
		// useAppDispatch({ type: 'user' })
		dispatch(user());
		console.log("click");
		console.log(userName);
	};

	useEffect(() => {
		setIsUserDefined(!!userName);
	}, [userName]);

	return (
		<>
			<div> tut login, a tut user = {!userName ? "null" : userName}</div>
			<button onClick={setUser}> test</button>
			<div>a tut testim watch effect {isUserDefined ? "true" : "false"}</div>
		</>
	);
}
