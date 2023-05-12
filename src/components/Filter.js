import React from 'react'
import { Rating } from 'react-simple-star-rating'
const Filter = ({filterstar,rating,handleRating,setInput,input}) => {

  return (
    <div className="navbare">
    

       <input type="text" onChange={(e)=>{setInput(e.target.value) }  }  placeholder='search for a movie' className='input1' />
        
        <Rating  onClick={handleRating} ratingValue={rating} className='star' />
        </div>
  )
}

export default Filter