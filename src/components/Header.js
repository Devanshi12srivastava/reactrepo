import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Header=()=>{

    const [btnName,setbtnName] = useState("Login");
    const onlinestatus=useOnlineStatus();
    const {loggedInUser} =useContext(UserContext);

    return (
        <div className="flex justify-end bg-pink-200 shadow-lg mb-2 px-7">
        
            <div className="logo"> 
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                     
                        <li className="px-4 font-bold "><Link to ="/">Home</Link></li>
                        <li className="px-4 font-bold "><Link to="/about">About</Link></li>
                        <li className="px-4 font-bold "><Link to ="/contact">Contact</Link></li>
                        <li className="px-4 font-bold ">Cart</li>
                        <button className="px-4" onClick={()=>{
                            btnName==="Login"
                            ?setbtnName("Logout"):setbtnName("Login");
                        }}>{btnName}</button>
                            <li> online status:{onlinestatus? "online":"offline"}</li>
                       <li>{loggedInUser}</li>
                      
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Header;