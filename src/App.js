
import './App.css';
import Header from './components/Header'

import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';







function App() {
  const[userName,setUserName]=useState()

  useEffect(()=>{
       const data={
        name:'Pawan'
       }
       setUserName(data.name)
  },[])
  
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App">
      
    <Header/>
    <Outlet/>
    <Footer/>
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
