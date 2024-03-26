import React, {  useState } from 'react'
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard.js';

const Body = () => {
    const[restaurantList,setrestaurantList]=useState([])
    console.log(restaurantList);


    useEffect(()=>{
      fetchData();
  },[]);

           const fetchData =async ()=>{
               const data= await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
               );
                const jso=await data.json();
                console.log(jso);
               
                     setrestaurantList(jso?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
        


           }

          
           
  return (
    <div className='body'>
    <div className='search-item'>
    <button onClick={()=>{
      const filteredList=restaurantList.filter((res)=>res.info.avgRating>4.2)
      setrestaurantList(filteredList)
    }}></button>
    
    </div>
    <div className='res-contain'>
    {restaurantList.map(restaurant=>(
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
  ))}
    
       </div>
    </div>
  )
}

export default Body