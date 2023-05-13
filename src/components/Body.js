import resturantData from "../mockData/resturantInfo-data.json";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allResturantData, setallResturantData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredResturantData, setfilteredResturantData] = useState(null);
  console.log('render');

  function filterResturantData(searchText, allResturantData){
    const filteredResturant = allResturantData.filter(({data}) => (data.name.toUpperCase().includes(searchText.toUpperCase())));
    setfilteredResturantData(filteredResturant);
  }

  // using useEffect
  useEffect(()=>{
    fetchApiData();
  },[]);

  async function fetchApiData(){
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.524118&lng=88.36259&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING");
    const resturantObj = await response.json();
    setallResturantData(resturantObj?.data?.cards[2]?.data?.data?.cards);
    setfilteredResturantData(resturantObj?.data?.cards[2]?.data?.data?.cards);
  }


  // conditional rendering

  return ((allResturantData === null) ? <Shimmer/> :
    (<div className="body">
      <div className="search-bar-container">
        <input className="input-box" type="text" placeholder="Search"  value= {searchText} onChange={(e) => setSearchText(e?.target?.value)}></input>
        <button
          className="search-btn"
          type="submit"
          onClick={() => {
            filterResturantData(searchText, allResturantData);
          }}
        >
          Search
        </button>
      </div>
      <div className="rescard-container">
        {
          (filteredResturantData?.length > 0) ? (filteredResturantData.map(({data}) => (
            <ResturantCard key={data.id} resData={data} />
          ))) : <h1>OOPS! No resturant found</h1>
        }
      </div>
    </div>)
  );
};

export default Body;
