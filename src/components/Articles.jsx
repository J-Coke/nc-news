import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import Votes from "./Votes";
import SortForm from "./SortForm";

const Articles = ({ months }) => {
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const { topic } = useParams();
  console.log(sort, order);
  useEffect(() => {
    getArticles(topic, sort, order).then((articles) => {
      setArticles(articles);
    });
  }, [topic, sort, order]);

  return (
    <main className="articles">
      <SortForm setSort={setSort} setOrder={setOrder} />
      <ul className="articleList">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`} id="article">
                <h2>{article.title}</h2>
              </Link>
              <Votes
                article_id={article.article_id}
                votes={article.votes}
                author={article.author}
              />
              <div className="artDetails">
                <p>Topic: {article.topic}</p>

                <p>Author: {article.author}</p>
                <p>Comments: {article.comment_count}</p>
                <p>
                  {article.created_at.substring(8, 10)}
                  {"th "}
                  {
                    months[parseInt(article.created_at.substring(5, 7)) - 1]
                  }{" "}
                  {article.created_at.substring(0, 4)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
