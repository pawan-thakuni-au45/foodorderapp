import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ResCatagory from './ResCatagory';
import { RES_MENU_URL } from '../utils/constant';

const RestaurantMenu = () => {
    const[resMenu,setResMenu]=useState(null)
  

    const {resId}=useParams()
    

    useEffect(()=>{
      
    fetchData()
        
    },[])

    const fetchData=async()=>{
        const data=await fetch(
          RES_MENU_URL+ resId
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

