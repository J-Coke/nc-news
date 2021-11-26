import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../utils/api";
import Comments from "./Comments";
import Votes from "./Votes";

const Article = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
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

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <main className="article">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <div className="artDetails">
        <span>
          {article.created_at}
          {/* {article.created_at.substring(8, 10)}
          {"th "}
          {months[parseInt(article.created_at.substring(5, 7))]}{" "}
          {article.created_at.substring(0, 4)} */}
        </span>
        <Votes
          article_id={article_id}
          votes={article.votes}
          author={article.author}
        />
        {/* <span>Votes: {article.votes}</span> */}
        <span>Comments: {article.comment_count}</span>
        <span>Author: {article.author}</span>
      </div>
      <Comments article_id={article_id} months={months} />
    </main>
  );
};

export default Article;
