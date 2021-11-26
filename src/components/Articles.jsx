import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import Votes from "./Votes";

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
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`} id="article">
                <h2>{article.title}</h2>
              </Link>
              {/* <ExpandableBody article={article.title} /> */}
              <p>Topic: {article.topic}</p>
              <Votes
                article_id={article.article_id}
                votes={article.votes}
                author={article.author}
              />
              <p>Author: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
