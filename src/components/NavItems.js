import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavItems = ({ itemName }) => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="">
      <Link className="mr-28" to={itemName.split(" ").join("").toLowerCase()}>
        <p className="text-center mt-7 font-medium font-sans text-lg">
          {itemName === "Cart" ? itemName + " " + cartItems.length : itemName}
        </p>
      </Link>
    </div>
  );
};

export default NavItems;
