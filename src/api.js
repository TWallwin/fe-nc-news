import axios from "axios";
axios.defaults.baseURL = "https://tom-nc-news.herokuapp.com";

export function getAllArticles(order, sortBy) {
  return axios
    .get(`/api/articles?sort_by=${sortBy}&order=${order}`)
    .then((res) => {
      return res.data.articles;
    });
}
export function getArticlesByTopic(topic, order, sortBy) {
  return axios
    .get(`/api/articles?topic=${topic}&sort_by=${sortBy}&order=${order}`)
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

export function updateArticleVotes(id, inc) {
  return axios.patch(`/api/articles/${id}`, { inc_votes: inc });
}

export function postComment(articleId, body, username) {
  return axios.post(`/api/articles/${articleId}/comments`, {
    username: username,
    body: body
  });
}
export function deleteComment(id) {
  return axios.delete(`/api/comments/${id}`);
}
