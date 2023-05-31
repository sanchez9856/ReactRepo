import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../hooks/useRestaurantMenuData";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResturantMenu = () => {
  const { resturantId } = useParams();
  const resturantMenuData = useRestaurantMenuData(resturantId);
  const dispatch = useDispatch();
  const handleOnClick = (itemName) => {
    dispatch(addItem(itemName));
  };

  return resturantMenuData === null ? (
    <Shimmer />
  ) : (
    <div className="resturantmenu-container">
      <h1>{resturantMenuData.title}</h1>
      <ul>
        {resturantMenuData?.itemCards?.map((data) => (
          <div className="">
            <li className="m-2 p-2">{data?.card?.info?.name}</li>
            <button
              type="submit"
              className=" bg-green-300 h-fit w-fit m-4"
              onClick={() => {
                handleOnClick(data?.card?.info);
              }}
            >
              Add Item
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
