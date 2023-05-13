import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const ResturantCard = ({ resData }) => {
  // const {id,imgUrl,resturantName,cuisines,rating,deliveryTime,price,cloudinaryID} = resData;
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
    <Link className="link-rescard" to={"/resturant" + "/" + id}>
      <div className="resturant-card">
        <img
          className="resturant-image"
          src={IMG_URL + cloudinaryImageId}
        ></img>
        <div className="res-name">{name}</div>
        <div className="res-cuisine">{cuisineString}</div>
        <div className="wrapping-container">
          <div className="res-rating">{avgRating}</div>
          <div className="res-delivery-time">{deliveryTime + " mins"}</div>
          <div className="res-price">{costForTwoString}</div>
        </div>
      </div>
    </Link>
  );
};

export default ResturantCard;
