import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../utils/api";
import Comments from "./Comments";

const Article = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <main className="article">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p className="artDetails">
        <span>Created: {article.created_at}</span>
        <span>Votes: {article.votes}</span>
        <span>Comments: {article.comment_count}</span>
        <span>Author: {article.author}</span>
      </p>
      <p>
        <Comments article_id={article_id} />
      </p>
    </main>
  );
};

export default Article;
