import "./App.css";
import Header from "./components/Header";
import UserSelector from "./components/UserSelector";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const isLoggedIn = !!currentUser.username;
  return (
    <UserContext.Provider value={{ isLoggedIn, currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <UserSelector isLoggedIn={isLoggedIn} />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics/:topic/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<Article />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
