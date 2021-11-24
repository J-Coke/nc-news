import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://jc-news-app.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic) => {
  let path = "/articles";
  if (topic) {
    path += `?topic=${topic}`;
  }
  console.log(topic);
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
