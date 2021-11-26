import "./App.css";
import Header from "./components/Header";
import UserSelector from "./components/UserSelector";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <UserSelector />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics/:topic/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<Article />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
