import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

async function getResturantMenu(resId, setResturantMenuData) {
  let resturantMenuUrl =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.524118&lng=88.36259&restaurantId=" +
    resId +
    "&submitAction=ENTER";
  const response = await fetch(resturantMenuUrl);
  const resturantMenu = await response.json();
  setResturantMenuData(
    resturantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card
  );
}

const ResturantMenu = () => {
  const { resturantId } = useParams();
  const [resId] = useState(resturantId);
  const [resturantMenuData, setResturantMenuData] = useState(null);
  console.log(resturantMenuData);

  useEffect(() => {
    getResturantMenu(resId, setResturantMenuData);
  }, []);

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
