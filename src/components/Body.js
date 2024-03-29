import React, {  useState } from 'react'
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard.js';
import { Link } from 'react-router-dom';

const Body = () => {
    const[restaurantList,setrestaurantList]=useState([])
    console.log("list",restaurantList);


    useEffect(()=>{
      fetchData();
  },[]);

           const fetchData =async ()=>{
               const data= await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
               );
                const jso=await data.json();
                console.log('kkj',jso);
               
                     setrestaurantList(jso.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                      );
        


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
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
  ))}
    
       </div>
    </div>
  )
}

export default Body