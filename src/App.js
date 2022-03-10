import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import ArticlePage from "./components/ArticlePageRoute/ArticlePage";
import { BrowserRouter } from "react-router-dom";
import Articles from "./components/ArticlesRoute/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:topic/:id" element={<ArticlePage />} />
          <Route path="/articles/:topic" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
