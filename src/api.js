import axios from "axios";
axios.defaults.baseURL = "https://tom-nc-news.herokuapp.com";
export function getAllArticles() {
  return axios.get("/api/articles").then((res) => {
    return res.data.articles;
  });
}
export function getArticlesByTopic(topic) {
  return axios
    .get(`/api/articles?topic=${topic}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch(console.log);
}
export function getArticleById(id) {
  return axios.get(`/api/articles/${id}`).then((res) => {
    return res.data.article;
  });
}

export function getArticleComments(id) {
  return axios.get(`/api/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
}
