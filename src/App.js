import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Articles from "./components/ArticlesRoute/Articles";
import ArticlePage from "./components/ArticlePageRoute/ArticlePage";
import { BrowserRouter } from "react-router-dom";
import TopicArticles from "./components/ArticlesRoute/TopicArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/articles/:topic" element={<TopicArticles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
