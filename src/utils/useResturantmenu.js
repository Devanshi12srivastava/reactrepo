import { useEffect,useState } from "react";
import { MENU_API } from "../utils/contant";

const useResturantMenu=(resId)=>{
    const[resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchData();

    },[]);
    const  fetchData = async ()=>{
     
        const data=await fetch(MENU_API+resId);

    
        const json=await data.json();
        console.log(json);
        setresInfo(json);
    };
    return resInfo;
};
export default useResturantMenu;