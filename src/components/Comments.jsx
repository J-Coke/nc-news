import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <h4>"{comment.body}"</h4>

            {/* <ExpandableBody article={article.title} /> */}
            <p className="commentDetails">
              {" "}
              <span> Created at: {comment.created_at}</span>
              <span>Votes: {comment.votes}</span>
              <span>Author: {comment.author}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
