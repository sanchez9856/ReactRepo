import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL, SUBMIT_ACTION } from "../utils/constants";

const useRestaurantMenuData = (resturantId) => {
  const [resturantMenuData, setResturantMenuData] = useState(null);

  async function getResturantMenu(resId, setResturantMenuData) {
    let resturantMenuUrl = RESTAURANT_MENU_URL + resId + SUBMIT_ACTION;
    const response = await fetch(resturantMenuUrl);
    const resturantMenu = await response.json();
    // setResturantMenuData(filteredRestaurantMenu.card.card);

    if (
      resturantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card?.card.title === "Recommended"
    ) {
      setResturantMenuData(
        resturantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card
      );
    } else {
      setResturantMenuData(
        resturantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[2]?.card?.card
      );
    }
  }

  useEffect(() => {
    getResturantMenu(resturantId, setResturantMenuData);
  }, []);

  return resturantMenuData;
};

export default useRestaurantMenuData;
