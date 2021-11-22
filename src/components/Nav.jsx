import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="nav">
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}/articles`} id="topic">
            {`${topic.slug}`}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
