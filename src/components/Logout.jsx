import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";

const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    setCurrentUser(currentUser);
  }, [currentUser, setCurrentUser]);
  return (
    <div>
      You are currently logged in as
      <span id="usernameTop">
        {"  "}
        {currentUser.username}
        {"  "}
      </span>
      <button
        onClick={() => {
          setCurrentUser({ username: "" });
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
