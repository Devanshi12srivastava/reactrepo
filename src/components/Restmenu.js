import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantmenu";
import RestaurantCategory from "./Rescategories";
import { useState } from "react";


const Restmenu=()=>{
  const[showIndex,setshowIndex]=useState(null);

    const {resId}=useParams();
    const resInfo=useResturantMenu(resId);
    console.log(resId);
    

const item = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{}
console.log(item);
console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
const categories =
  resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];
  console.log("data",categories);


    return(
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{resInfo?.data?.cards[2]?.card?.card?.info.name}</h1>
            <h2 className="font-bold text-lg">{resInfo?.data?.cards[2]?.card?.card?.info.cuisines.join(",")}</h2>
           <div className="list">
           
        </div>
                  
{categories.length > 0 &&
  categories.map((category, index) => (
    <RestaurantCategory key={index} data={category.card.card} showItems={index===showIndex ? true:false}
    setshowIndex={()=>setshowIndex(index)}/>
))};


           
        </div>
    );
};
export default Restmenu;
