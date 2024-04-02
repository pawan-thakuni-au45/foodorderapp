import React from 'react'

const ItemList = ({items}) => {
  return (
    
   <div>
      {items.map((item)=>(
        <div 
        key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left">
        
        <img className="w-3/12 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}></img>
        <button className="p-2 bg-black text-white shadow-lg m-auto">Add+</button>
        
                <div>
                <span>{item.card.info.name}:₹{item.card.info.price/100}</span>
                


                </div>
                <p>{item.card.info.description}</p>
        </div>
      ))}
      </div>
  );
};

export default ItemList