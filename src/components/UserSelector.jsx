import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "./Login";
import Logout from "./Logout";

const UserSelector = () => {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  useEffect(() => {}, [currentUser]);
  console.log(isLoggedIn, currentUser);
  return isLoggedIn ? <Logout /> : <Login />;
};
export default UserSelector;
