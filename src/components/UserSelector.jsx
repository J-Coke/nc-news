import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "./Login";
import Logout from "./Logout";

const UserSelector = ({ isLoggedIn }) => {
  const { currentUser } = useContext(UserContext);
  useEffect(() => {}, [currentUser]);
  console.log(isLoggedIn);
  return isLoggedIn ? <Logout /> : <Login />;
};
export default UserSelector;
