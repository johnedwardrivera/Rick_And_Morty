import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { onSearch, logout } = props;
  return (
    <div>
      <Link to="about">About</Link>
      <Link to="home">Home</Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Nav;
