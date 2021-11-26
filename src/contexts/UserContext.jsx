import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const isLoggedIn = !!currentUser.username;
  return (
    <UserContext.Provider value={{ isLoggedIn, currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
