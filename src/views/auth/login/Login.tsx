import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Login() {
  const user = useSelector(store => store.test.user);
  const dispatch = useDispatch();

  const [isUserDefined, setIsUserDefined] = useState(false);

  const setUser = () => {
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