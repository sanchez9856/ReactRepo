import navItemData from "../mockData/nav-item-data.json";
import NavItems from "./NavItems";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-img" src={LOGO_URL} alt="app-logo" />
        </Link>
      </div>
      <div className="nav-container">
        {navItemData.map((data) => (
          <NavItems key={data.id} itemName={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Header;
