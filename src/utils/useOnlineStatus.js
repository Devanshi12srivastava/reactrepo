import { useEffect,useState } from "react";

const useOnlineStatus=()=>{

    const[onlinestatus,setonlineStatus]=useState(true);
    useEffect (()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        });
     window.addEventListener("online",()=>{
            setonlineStatus(true);
        });
    
    },[]);

    return onlinestatus; 
};
export default useOnlineStatus;