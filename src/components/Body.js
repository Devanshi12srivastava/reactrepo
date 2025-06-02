import ResturantCard ,{withpromotedlabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listofResturant, setlistofResturant] = useState([]);
  const [searchText,setsearchText]= useState("enter");

  const ResturantCardPromoted=withpromotedlabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&collection=80479&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await response.json();
      console.log("json is ",json); // Log the response to inspect it

      // Assuming the restaurants are in json.data.cards, 
      // we extract all restaurant info objects and set them to the state
      const restaurants = json?.data?.cards
        ?.flatMap((card) => card?.card?.card?.info || []) // Ensure we get an array of restaurant objects
        || [];

      setlistofResturant(restaurants); // Set the array of restaurants to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlinestatus=useOnlineStatus();
  if(onlinestatus === false)return (<h1>
    check you internet connection
  </h1>);

if(listofResturant.length===0){
    return <Shimmer/>
    
}
  return (
    <div className="Body">
      <div className="filter">
        <div className="p-2 m-1">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value);
            
          }}  />
          <button onClick={()=>{
            console.log(searchText);

            const filterResturant=listofResturant.filter((resturant)=> resturant.info.name.include(searchText));
            setlistofResturant(filterResturant);
          }} className="px-4 py-1 m-2 bg-green-200 rounded-lg">Search</button> 
          </div>
          <div className="m-1 p-4 flex items-center"> <button
          className="bg-gray-200 p-2 mx-2 px-4 rounded-xl"
          onClick={() => {
            const filteredList = listofResturant.filter(
              (resturant) => resturant?.avgRating > 4
            );
            setlistofResturant(filteredList);
          }}
        >
          Top rated
        </button>
        </div>
        
      </div>

      <div className="flex flex-wrap">
      {listofResturant.map((resturant) => (
  <Link key={resturant?.id} to={`/resturants/${resturant?.id}`}>
   
    {resturant.Promoted ? (<ResturantCardPromoted resData={resturant}/>):( <ResturantCard resData={resturant} />)}
  </Link>
))}

  
      
      </div>
    </div>
  );
};

export default Body;
