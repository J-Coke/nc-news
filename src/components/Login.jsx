import { useContext, useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [users, setUsers] = useState([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [currentUser]);

  return (
    <form>
      <label>
        Please select your username here:{" "}
        <select
          id="users"
          onChange={(e) => {
            setCurrentUser({ username: e.target.value });
          }}
        >
          {users.map((user) => {
            return (
              <option value={user.username} key={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};

export default Login;
