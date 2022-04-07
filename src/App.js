import Header from "./components/Header";
import { UserContext } from "./contexts/UserContexts";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import ArticlePage from "./components/ArticlePageRoute/ArticlePage";
import Articles from "./components/ArticlesRoute/Articles";
import { useState } from "react";
function App() {
  const [user, setUser] = useState("tickle122");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <div className="body-render">
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/articles/:topic/:id" element={<ArticlePage />} />
              <Route path="/articles/:topic" element={<Articles />} />
              <Route
                path="/*"
                element={
                  <>
                    <h1 className="error">404:path not found</h1>
                    <Link to="/">
                      {" "}
                      <h1 className="error">Go Back!</h1>
                    </Link>
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
