import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  //   const ExpandableBody = (article) => {
  //     const [isMore, setIsMore] = useState(false);
  //     const toggleIsMore = () => {
  //       setIsMore((prevIsMore) => !prevIsMore);
  //     };
  //     return (
  //       <div className="expBody">
  //         {isMore && article.votes}
  //         {/* {!isMore && article.body.slice(0, 20)} */}
  //         <span onClick={toggleIsMore}>
  //           {isMore && "...less"}
  //           {!isMore && "...more"}
  //         </span>
  //       </div>
  //     );
  //   };

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
