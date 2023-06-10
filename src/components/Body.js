import resturantData from "../mockData/resturantInfo-data.json";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_DATA_URL } from "../utils/constants";

const Body = () => {
  const [allResturantData, setallResturantData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredResturantData, setfilteredResturantData] = useState(null);
  console.log("render");

  function filterResturantData(searchText, allResturantData) {
    const filteredResturant = allResturantData.filter(({ data }) =>
      data.name.toUpperCase().includes(searchText.toUpperCase())
    );
    setfilteredResturantData(filteredResturant);
  }

  // using useEffect
  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const response = await fetch(RESTAURANT_DATA_URL);
    const resturantObj = await response.json();
    setallResturantData(resturantObj?.data?.cards[2]?.data?.data?.cards);
    setfilteredResturantData(resturantObj?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional rendering

  return allResturantData === null ? (
    <Shimmer />
  ) : (
    <div className="mt-4">
      <div className="flex justify-center">
        <input
          data-testid="search-input"
          className="w-2/4 h-8 border border-gray-300 rounded-l-lg shadow-inner shadow-gray-300"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e?.target?.value)}
        ></input>
        <button
          data-testid="search-btn"
          className="bg-green-100 font-medium rounded-r-lg w-24 hover:bg-green-700 hover:text-white"
          type="submit"
          onClick={() => {
            filterResturantData(searchText, allResturantData);
          }}
        >
          Search
        </button>
      </div>
      <div
        data-testid="restaurant-card"
        className="mt-4 flex flex-row flex-wrap justify-around"
      >
        {filteredResturantData?.length > 0 ? (
          filteredResturantData.map(({ data }) => (
            <ResturantCard key={data.id} resData={data} />
          ))
        ) : (
          <h1>OOPS! No resturant found</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
