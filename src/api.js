import axios from "axios";
axios.defaults.baseURL = "https://tom-nc-news.herokuapp.com";
export function getAllArticles() {
  return axios.get("/api/articles").then((articles) => {
    return articles.data.articles;
  });
}
export function getArticlesByTopic(topic) {
  return axios
    .get(`/api/articles?topic=${topic}`)
    .then((articles) => {
      return articles.data.articles;
    })
    .catch(console.log);
}
