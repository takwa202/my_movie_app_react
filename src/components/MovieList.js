import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({mvl,filterstar,rating,setRate, input,setInput , filterstars }) => {

  return (
    <div className='div'>
        {    mvl.filter(
        (el) => 
          el.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()) && el.rating == rating
        
        ).map((el,i)=> <MovieCard el={el} key={i} />
            )
        }
    </div>
  )
}

export default MovieList