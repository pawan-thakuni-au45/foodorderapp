import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'


const Header = () => {
  const {loggedInUser}=useContext(UserContext)
  const onlineStatus=useOnlineStatus()

  const cart=useSelector((store)=>store.cart.items)
  return (
    <div className=" md:bg-orange-500 p-3 w-full m-0 md:m-auto   flex justify-between items-center">
    
    <div>
    
    <Link to="/"><img className="w-40 h-44 mx-auto md:mx-0" alt='img' src='data:image/jpeg;base64,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'>
     
    </img>
    </Link>
    </div>
    <div className="flex">
    <ul className=" fixed bottom-0 flex p-2  justify-around bg-white left-0 w-full md:block md:flex md:justify-between md:gap-5 md:text-xl md:static md:w-auto">
    <li className="px-2">onlineStatus:{onlineStatus ?"🟢":"🔴"}</li>
    <li className="px-2"><Link to="/">Home</Link></li>
    <li className="px-2"><Link to="/about">About us</Link></li>
    
    <li className="px-2"><Link to="/grocery">Grocery</Link></li>

    <Link to="/cartlist"><li className="px-2">Card🛒 -({cart.length})</li></Link>
    <li className="font-bold">Login :{loggedInUser}</li>

    
    </ul>
    
    </div>
    </div>
  )
}

export default Header

// flex justify-between bg-orange-500 border-green w-full flex-col md:flex-row 
// flex py-16 px-7 mx-5