import { Link } from "react-router-dom";

const NavItems = ({ itemName }) => {
  return (
    <Link  className="link-container" to = {itemName.split(" ").join("").toLowerCase()}>
      <div className="nav-item-container">
        <p className="nav-item-val">{itemName}</p>
      </div>
    </Link>
  );
};

export default NavItems;
