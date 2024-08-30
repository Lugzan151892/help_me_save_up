import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

export default function Login() {
  const user = useAppSelector(state => state.test.user);
  const dispatch = useAppDispatch();

  const [isUserDefined, setIsUserDefined] = useState(false);

  const setUser = () => {
    // useAppDispatch({ type: 'user' })
    dispatch({ type: 'user' })
    console.log('click');
    console.log(user);
  }

  useEffect(() => {
    user ? setIsUserDefined(true): setIsUserDefined(false)
  }, [user])

  return (
    <>
      <div> tut login, a tut user = {!user ? 'null' : user}</div>
      <button onClick={setUser}> test</button>
      <div>a tut testim watch effect {isUserDefined ? 'true' : 'false'}</div>
    </>
  )
}