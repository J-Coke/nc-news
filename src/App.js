import "./App.css";
import Header from "./components/Header";
import UserSelector from "./components/UserSelector";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <UserSelector />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles months={months} />} />
          <Route path="/articles" element={<Articles months={months} />} />
          <Route
            path="/topics/:topic/articles"
            element={<Articles months={months} />}
          />
          <Route
            path="/articles/:article_id"
            element={<Article months={months} />}
          />
          <Route
            path="/articles/:article_id/comments"
            element={<Article months={months} />}
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
