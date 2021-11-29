import { useContext, useState } from "react";
import { patchVotes } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const Votes = ({ votes, article_id, author }) => {
  const [voteModifier, setVoteModifier] = useState(0);
  const { currentUser, isLoggedIn } = useContext(UserContext);
  if (isLoggedIn) {
    if (currentUser.username === author) {
      return (
        <div>
          Votes: {votes + voteModifier} {" - "} Sorry, you cannot vote on your
          own articles!
        </div>
      );
    } else {
      return (
        <div>
          Votes: {votes + voteModifier}
          {"          "}
          <span
            onClick={() => {
              patchVotes(article_id, 1);
              setVoteModifier((voteModifier) => {
                return voteModifier + 1;
              });
            }}
            className="updown"
          >
            ☝🏽
          </span>
          <span
            onClick={() => {
              patchVotes(article_id, -1);
              setVoteModifier((voteModifier) => {
                return voteModifier - 1;
              });
            }}
            className="updown"
          >
            👇🏽
          </span>
        </div>
      );
    }
  } else {
    return (
      <div>
        Votes: {votes}
        {"   "}------Please login above to vote
      </div>
    );
  }
};

export default Votes;
