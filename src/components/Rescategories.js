import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = ({ data,showItems,setshowIndex }) => {
  if (!data) return null; // defensive check


const handleClick=()=>{
setshowIndex();
};

  return (
    <div className="p-4 [mx-1.2] border-b w-8/12 bg-gray-50 shadow-lg my-4 mx-96 flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="text-lg font-bold " >{data.title} ({data.itemCards.length})</span>
       {showItems && <ItemList items={data.itemCards}/>}
      <span>⬇️</span>
    
    </div>
  );
};

export default RestaurantCategory;
