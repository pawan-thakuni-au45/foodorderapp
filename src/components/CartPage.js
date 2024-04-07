import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const CartPage = () => {
    const cartItem=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()

    const handleClick=()=>{
        dispatch(clearCart())
    }
      return (
    <div className="text-center">
    <div className="w-3/12 m-auto">
    <h1>Cart🛒</h1>
    <button className="bg-black text-white mt-6 p-3 rounded-2xl" onClick={handleClick}>button</button>
    {cartItem.length===0 && (<h1>Your Cart is Empty ,please Add some Items</h1>)}
    <ItemList items={cartItem}></ItemList>
    </div>
    </div>
  )
}

export default CartPage

// <ItemList items={cartItem}></ItemList>