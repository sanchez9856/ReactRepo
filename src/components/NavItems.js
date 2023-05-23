import { Link } from "react-router-dom";

const NavItems = ({ itemName }) => {
  return (
    <div className="">
      <Link className="mr-28" to={itemName.split(" ").join("").toLowerCase()}>
        <p className="text-center mt-7 font-medium font-sans text-lg">
          {itemName}
        </p>
      </Link>
    </div>
  );
};

export default NavItems;
