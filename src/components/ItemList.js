import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import CartPage from './CartPage';

const ItemList = ({items}) => {
const dispatch=useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        <CartPage itempage={item}/>
        
    }
    
  return (
    
   <div className='w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg' >
      {items.map((item)=>(
        <div
        key={item.card.info.id}
        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
      >
        <div className="w-9/12">
          <div className="py-2">
            <span className='font-bold'>{item.card.info.name}</span>
            <span>
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          
        </div>
    

        <div className="w-3/12 p-4">
        <div className="absolute">
         
          <button
            className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
            onClick={() => handleAddItem(item)}

          >
            Add +




          </button>
        </div >
        <img className="m-auto" alt="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} />
      </div>
    </div> 
  ))}
</div>
);
};

export default ItemList


