import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <main className="articles">
      <ul>
        {articles.map((article) => {
          return (
            <li>
              <h2>{article.title}</h2>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
              <p>Author: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
