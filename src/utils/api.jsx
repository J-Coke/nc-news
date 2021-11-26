import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://jc-news-app.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic, sort) => {
  let path = "/articles";
  if (topic) {
    path += `?topic=${topic}`;
  }
  //   console.log(sort.sortBy);
  //   if ()
  return newsApi.get(path).then((res) => {
    return res.data.articles;
  });
};
export const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
export const getUsers = () => {
  return newsApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};
export const patchVotes = (article_id, inc_votes) => {
  console.log(article_id, { inc_votes }, "api");
  return newsApi.patch(`articles/${article_id}`, { inc_votes }).then((res) => {
    console.log(res);
    return res.data.article.votes;
  });
};
export const postComment = (article_id, author, body) => {
  console.log(article_id, { author, body }, "api");
  return newsApi
    .post(`articles/${article_id}/comments`, { author, body })
    .then((res) => {
      console.log(res);
      return res.data.comment;
    });
};
export const deleteComment = ({ comment_id }) => {
  console.log(comment_id, "api");
  return newsApi.delete(`comments/${comment_id}/`).then((res) => {
    console.log(res);
    return res.data;
  });
};
