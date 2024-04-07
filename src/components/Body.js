import React, {  useContext, useState } from 'react'
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import UserContext from '../utils/UserContext.js';
import Shimmer from './Shimmer.js';
import {RES_URL} from '../utils/constant.js'

const Body = () => {
    const[restaurantList,setrestaurantList]=useState([])
    console.log("liiii",restaurantList);
    const [filterres,setFilterres]=useState([]);
    

    const[searchText,setSearchText]=useState("")
    
  
    const {loggedInUser,setUserName}=useContext(UserContext)
  


    useEffect(()=>{
      fetchData();
  },[]);

           const fetchData =async ()=>{
               const data= await fetch(
                RES_URL
               );
                const jso=await data.json();
                console.log('kkj',jso);
               
                     setrestaurantList(jso?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                     setFilterres(jso?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

                      
        


           }

           
           const OnlineStatus=useOnlineStatus()
if(OnlineStatus===false){
  return <h1>Looks like you are offline:</h1>
}

if(restaurantList?.length===0)
{
  return(
    <Shimmer/>
  )
}

          
           
  return (
    <div className=' m-0 w-full md:m-auto md:w-4/5 flex flex-col gap-6 justify-center '>
    <div className='filter  m-0 w-full md:m-auto md:w-4/5 flex flex-col gap-6 justify-center'>
    <div className='flex  flex-col md:flex-row '>
    <div className='search m-4 p-4 border-black '>
    <input type="text" className='ser-box border-solid  border-black bg-gray-300' value={searchText} onChange={(e)=>{
      setSearchText(e.target.value); 
    }} />
    <button className="px-8 py-2 bg-green-100 m-4 rounded-3xl" onClick={()=>{
      const filteredRes=restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilterres(filteredRes);
    }}>
    search
    </button>
 
    
    </div>
    <div className="px-1 py-1 bg-gray-100 my-12 p-4 rounded-lg hover:bg-red-400">
     <button className='filter-btn'  onClick={()=>{
        const filterlist=restaurantList.filter((res) => res.info.avgRating > 4.3 );
        setFilterres(filterlist);
        
           
     }} >Top Rated Restaurants</button>
    
     </div>
     </div>
    
  
    <div className="search m-4 p-4 flex items-center">
    <label>UserName:</label>
   
    <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}>
    
    </input>
    
     
    </div>
    
    </div>
    <div className="ml-[40px] flex flex-wrap bg-black-600 my-2">
    {filterres.map(restaurant=>(
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
          
          <RestaurantCard  resData={restaurant}/></Link>
  ))}
    
       </div>
    </div>
  )
}

export default Body


// body flex flex-col md:flex-0