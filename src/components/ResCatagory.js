import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCatagory = ({data}) => {
    
    const [showItem,setShowItem]=useState(false)
   
    const showItems=()=>{
        setShowItem(!showItem)
    }

  return (
    <div>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg " onClick={showItems}>
    <div className="flex justify-between">
     <span className="font-bold">{data.title}</span>
     <span>🔽</span>
     </div>
     </div>
    { showItem && <ItemList items={data.itemCards}/>}
    
     
    
    </div>
  )
}

export default ResCatagory