import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
