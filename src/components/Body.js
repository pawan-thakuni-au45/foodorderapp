import React, {  useContext, useState } from 'react'
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import UserContext from '../utils/UserContext.js';


const Body = () => {
    const[restaurantList,setrestaurantList]=useState([])
    console.log("list",restaurantList);
    const {loggedInUser,setUserName}=useContext(UserContext)
  


    useEffect(()=>{
      fetchData();
  },[]);

           const fetchData =async ()=>{
               const data= await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
               );
                const jso=await data.json();
                console.log('kkj',jso);
               
                     setrestaurantList(jso?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                      );
        


           }
           const OnlineStatus=useOnlineStatus()
if(OnlineStatus===false){
  return <h1>Looks like you are offline:</h1>
}


          
           
  return (
    <div className='body'>
    <div className='search-item'>
    <button className="bg-red" onClick={()=>{
      const filteredList=restaurantList.filter((res)=>res.info.avgRating>4.2)
      setrestaurantList(filteredList)
    }}>button</button>
    <div className="search m-4 p-4 flex items-center">
    <label>UserName:</label>
   
    <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}>
    
    </input>
    
     
    </div>
    
    </div>
    <div className="ml-[40px] flex flex-wrap bg-black-600 ">
    {restaurantList.map(restaurant=>(
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
          
          <RestaurantCard  resData={restaurant}/></Link>
  ))}
    
       </div>
    </div>
  )
}

export default Body