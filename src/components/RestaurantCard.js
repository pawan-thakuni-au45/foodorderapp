import React from 'react'

const RestaurantCard = (props) => {
  const {resData}=props;
  console.log(resData)
  return (
    <div className='main-con'>
   
    <div className='res-card'>
   <div>
       <img className='res-img' alt='img-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId
      }
     
      ></img>
      </div>
     <div>
       
       <h4>{resData.info.name}</h4>
       <h4>{resData.info.name}</h4>
       <h4>{resData.info.avgRating}</h4>
       <h4>{resData.info.name}</h4>
       </div>
     
    </div>
    </div>
   
  )
}

export default RestaurantCard