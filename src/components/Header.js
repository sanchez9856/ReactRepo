import navItemData from "../mockData/nav-item-data.json";
import NavItems from "./NavItems";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex bg-green-200 justify-between shadow-md">
      <div className="logo-container">
        <Link to="/">
          <img
            data-testid="logo"
            className="h-24 p-2 w-28"
            src={LOGO_URL}
            alt="app-logo"
          />
        </Link>
      </div>
      <div className="flex justify-evenly">
        {navItemData.map((data) => (
          <NavItems key={data.id} itemName={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Header;
