import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component{
    constructor(props){

     
      super(props)
      this.state={
        userInfo:{
        name:'name',
        location:'india',
        avatar_url:"hb"

        }
    }
   
    }
    async componentDidMount(){
         const data=await fetch("https://api.github.com/users/pawan-thakuni-au45")
         const json=await data.json()
         
         this.setState({
          
            userInfo:json,
           
         })
         console.log('github',json);
         
    }
   
   

    render(props){
       
        const {name,avatar_url,url }=this.state.userInfo
        return(
            <div className="item-center">
            <h1 className="name-con">{name}</h1>
    
            <h4 className="font-bold">git hub link for this project</h4><a href="https://github.com/pawan-thakuni-au45/foodorderapp"  target="_blank" className="bg-red" >Click on me 😂 </a>
            <img className="m-auto w-3/12" alt="img" src={avatar_url }></img>

            
    
          
            </div>
        )
    }
}
export default UserClass