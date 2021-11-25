import { useState } from "react";
import { patchVotes } from "../utils/api";

const Votes = ({ votes, article_id }) => {
  const [voteModifier, setVoteModifier] = useState(0);
  console.log(article_id, "art in votes");
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
};

export default Votes;
