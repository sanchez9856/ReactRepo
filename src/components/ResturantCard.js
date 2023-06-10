import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const ResturantCard = ({ resData }) => {
  // const {id,imgUrl,resturantName,cuisines,rating,deliveryTime,price,cloudinaryID} = resData;
  // const userInfo = useContext(UserContext);
  const {
    id,
    name,
    avgRating,
    cloudinaryImageId,
    costForTwoString,
    cuisines,
    deliveryTime,
  } = resData;
  const cuisineString = cuisines.join(", ");
  return (
    <Link data-testid="navigate-res-menu" to={"/resturant" + "/" + id}>
      <div className="w-64 h-72 mt-8 ml-5 mb-8 mr-5 p-5 relative hover:shadow-2xl hover:shadow-gray-700">
        <img className="w-60 h-40" src={IMG_URL + cloudinaryImageId}></img>
        <div className="text-base font-sans font-medium">{name}</div>
        <div className="w-full h-fit text-gray-700 text-base font-sans font-light leading-4 tracking-normal">
          {cuisineString}
        </div>
        {/* <div>
          <span>{userInfo.username}</span>
          <br />
          <span>{userInfo.email}</span>
        </div> */}
        <div className="flex absolute bottom-0">
          <div className="">{avgRating}</div>
          <div className="ml-4">{deliveryTime + " mins"}</div>
          <div className="res-price ml-4">{costForTwoString}</div>
        </div>
      </div>
    </Link>
  );
};

export default ResturantCard;
