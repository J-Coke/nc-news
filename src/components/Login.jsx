import { useContext, useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [userToLogin, setUserToLogin] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [currentUser]);
  const handleSubmit = (e) => {
    setCurrentUser(userToLogin);
  };
  return (
    <form id="users">
      <label>
        <select
          placeholder="jhbj"
          form="users"
          onChange={(e) => {
            setUserToLogin({ username: e.target.value });
          }}
        >
          <option></option>
          {users.map((user) => {
            return (
              <option value={user.username} key={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </label>
    </form>
  );
};

export default Login;
