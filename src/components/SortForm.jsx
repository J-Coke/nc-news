import { useState } from "react";

const SortForm = ({ setSort, setOrder }) => {
  //   const sortOptions = ["author", "title", "created", "votes", "comment_count"];
  //   const sortObj = {"author":{}, title, "created", "votes", "comment_count"}

  return (
    <form>
      <fieldset>
        <legend>Sort by:</legend>
        <select
          name="sortBy"
          id="sortBy"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="">Please select option</option>
          <option value="author">Author</option>
          <option value="title">Title</option>
          <option value="created_at">Publication Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
        <select
          name="orderBy"
          id="orderBy"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="">Please select option</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </fieldset>
    </form>
  );
};

export default SortForm;
