import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import Votes from "./Votes";
import SortForm from "./SortForm";

const Articles = () => {
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
              <p>Comments: {article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
