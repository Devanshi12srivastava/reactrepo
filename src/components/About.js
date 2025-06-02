import UserClass from "./UserClass";
import React from "react"
import UserContext from "../utils/UserContext";
import { useContext } from "react";

class About extends React.Component{
    constructor(props){
    super(props);
     console.log(props);
     console.log("parent constructor");

}
componentDidMount(){
        console.log("parent Mount");
}

render(){
     console.log("parent render");
    return(
        <div>
        <h1 className="text-7xl">My name is Rimjhim</h1>
                <UserClass name={"Devanshi react"} location={"gkp"} text={"sanjay"}/>
               <div>
                loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
               </div>

            </div>
)
} 
}  
export default About;
