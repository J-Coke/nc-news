import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/api";

const CommentAdder = ({
  article_id,
  comments,
  setComments,
  setCommentToAdd,
  commentToAdd,
  setNewComment,
}) => {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // let newComments = [commentToAdd, ...comments];
    // setComments();
    // console.log(comments, "com");
    postComment(article_id, currentUser.username, commentToAdd).then(() => {
      setNewComment(commentToAdd);
      setCommentToAdd("");
    });
  };
  if (!isLoggedIn) {
    return <div>Please login above to add a comment</div>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Please add a new comment here:</legend>
          <input
            type="text"
            name="comment"
            id="comment"
            value={commentToAdd}
            onChange={(e) => {
              console.log(e);
              setCommentToAdd(e.target.value);
            }}
            required
            placeholder="Type your comment here..."
          ></input>
          <button type="submit">✔</button>
        </fieldset>
        <p id="error"></p>
      </form>
    );
  }
};

export default CommentAdder;
