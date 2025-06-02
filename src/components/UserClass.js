import { userInfo } from "os";
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this .state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            },
        };
        
     
    }
     async componentDidMount(){
      const data= await fetch("https://api.github.com/users/Devanshi12Srivastava");
      const json=  await data.json()
      console.log(json);
      this.setState({
        userInfo:json,
      })
    }
    render(){
        const {name,bio,avatar_url}=this.state.userInfo;
    
        
         //console.log("child render");
        return(
            <div className="user">
                <h1>Name:{name}</h1>
                <h3> bio:{bio}</h3>
                <img src ={avatar_url}/>
                
            </div>
        )
        
    }
   
    

};
export default UserClass;