import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";

const Comments = ({ months }) => {
  const [commentDel, setCommentDel] = useState("");
  const [comments, setComments] = useState([]);
  const [commentToAdd, setCommentToAdd] = useState("");
  const [newComment, setNewComment] = useState("");

  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id, newComment, commentDel]);
  return (
    <div>
      <CommentAdder
        article_id={article_id}
        author={comments.author}
        comments={comments}
        setComments={setComments}
        commentToAdd={commentToAdd}
        setCommentToAdd={setCommentToAdd}
        setNewComment={setNewComment}
      />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>"{comment.body}"</h4>
              {/* <ExpandableBody article={article.title} /> */}
              <p className="commentDetails">
                {" "}
                <time>
                  {" "}
                  Posted at: {comment.created_at.substring(11, 16)}
                  {" on "}
                  {comment.created_at.substring(8, 10)}
                  {"th "}
                  {
                    months[parseInt(comment.created_at.substring(5, 7)) - 1]
                  }{" "}
                  {comment.created_at.substring(0, 4)}
                </time>
                <CommentDeleter
                  comment_id={comment.comment_id}
                  author={comment.author}
                  commentDel={commentDel}
                  setCommentDel={setCommentDel}
                />
                {/* <span>Votes: {comment.votes}</span> */}
                <span>Author: {comment.author}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
