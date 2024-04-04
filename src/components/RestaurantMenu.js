import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ResCatagory from './ResCatagory';

const RestaurantMenu = () => {
    const[resMenu,setResMenu]=useState(null)
    console.log(resMenu);

    const {resId}=useParams()
    console.log("resid",resId);

    useEffect(()=>{
      
    fetchData()
        
    },[])

    const fetchData=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId="+ resId
        )
        const json=await data.json();
        
        setResMenu(json.data)
        
        
       
       

    }
    
      

    if(resMenu===null){
       return <h1>loading..</h1>
    }
   
     const {name,cuisines,costForTwoMessage
        }=resMenu?.cards[2]?.card?.card?.info
    
       
 const {itemCards}=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {}
 console.log("itemcars=",itemCards);


 const catagory=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")





  return (
    
   
  <div className="text-center">
    


  <h1 className="my-6 text-2xl font-bold">{name}</h1>
  <p className="text-lg font-bold">
    {cuisines.join(', ')} - {costForTwoMessage}
  </p>

  
 
   
      
     
      {
       
         
        catagory.map((cat)=>(
          <ResCatagory key={cat.card.card.title} data={cat.card.card}/>
        ))
      }
    </div>
  )
}

export default RestaurantMenu

