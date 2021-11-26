import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const CommentDeleter = ({ comment_id, author, setCommentDel }) => {
  const { currentUser, isLoggedIn } = useContext(UserContext);
  //   useEffect(() => {
  //     setCommentDel(commentDel);
  //   }, [commentDel]);
  //   console.log(isLoggedIn, currentUser.username, author, "if and");
  if (isLoggedIn && currentUser.username === author) {
    return (
      <button
        onClick={() => {
          deleteComment({ comment_id }).then(() => {
            setCommentDel(comment_id);
          });
        }}
      >
        Delete comment
      </button>
    );
  } else {
    return <span></span>;
  }
};

export default CommentDeleter;
