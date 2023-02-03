import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "../components/styles/Nav.module.css";

const Nav = (props) => {
  const { onSearch, logout } = props;
  return (
    <div className={style.grid}>
      <div className={style.about}>
        <Link className={style.textlink} to="about">
          About
        </Link>
      </div>
      <div className={style.favorite}>
        <Link className={style.textlink} to="/favorites">
          My favoritos
        </Link>
      </div>
      <div className={style.home}>
        <Link className={style.textlink} to="home">
          Home
        </Link>
      </div>

      <div className={style.search}>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className={style.logout}>
        <button className={style.btnlogout} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default Nav;
