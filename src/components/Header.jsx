import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 id="home">NC-News</h1>

        <h1 id="title">Articles</h1>
      </Link>
    </header>
  );
}
