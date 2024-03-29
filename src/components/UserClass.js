import React from "react";

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
         console.log(json);
         
    }
   

    render(props){
        const {name,location,avatar_url }=this.state.userInfo
        return(
            <div className="clas">
            <h1 className="name-con">{name}</h1>
            <img src={avatar_url }></img>
            <h2>Location:{location}</h2>
            </div>
        )
    }
}
export default UserClass