import { IMG_URL } from "../utils/constants";

const CartCard = ({ imageid, name, description, price }) => {
  return (
    <div className=" bg-green-100 h-30 m-3 w-3/4 shadow-md shadow-gray-400 flex justify-between">
      <div className="">
        <img
          src={IMG_URL + imageid}
          alt="Dish Image"
          className="h-14 w-20 m-3"
        ></img>
      </div>
      <div className=" h-30 w-3/4">
        <p>{name}</p>
        <p className=" break-normal">{description}</p>
      </div>
      <div>
        <p className=" mt-6 mr-4">
          {price / 100 + " "}
          <span>&#x20B9;</span>
        </p>
      </div>
    </div>
  );
};

export default CartCard;
