import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../hooks/useRestaurantMenuData";

const ResturantMenu = () => {
  const { resturantId } = useParams();
  const resturantMenuData = useRestaurantMenuData(resturantId);

  return resturantMenuData === null ? (
    <Shimmer />
  ) : (
    <div className="resturantmenu-container">
      <h1>{resturantMenuData.title}</h1>
      <ul>
        {resturantMenuData?.itemCards?.map((data) => (
          <li>{data?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
