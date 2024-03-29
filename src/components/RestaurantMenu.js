import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const[resMenu,setResMenu]=useState(null)
    console.log(resMenu);

    const {resId}=useParams()
    console.log("resid",resId);

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId="+ resId
        )
        const json=await data.json();
        console.log("menu==",json);
        setResMenu(json?.data)
        // setResMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        
        console.log("resmwnu",resMenu);
       

    }
    
        // const {itemCards}=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    if(resMenu===null){
       return <h1>loading..</h1>
    }
    console.log("resmwnu",resMenu);
     const {name,cuisines,costForTwoMessage
        }=resMenu?.cards[2]?.card?.card?.info
    
        console.log("resmwnuuuu",resMenu);
 const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
 console.log("frfgr",itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p> {cuisines.join(",")}-{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
      {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name}</li>)}
        
      </ul>
    </div>
  )
}

export default RestaurantMenu