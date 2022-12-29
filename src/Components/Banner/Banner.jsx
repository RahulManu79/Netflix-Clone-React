import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axios'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constans/constans'
function Banner() {
  const [movie, setmovie] = useState();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    ).then((response)=>{
      console.log(response.data.results[0])
        setmovie(response.data.results[0])
    })
  }, []);
    return (
      
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:'' })`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""} </h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""} </h1>
        </div>
        <div className="fade-bottom"></div>
        
    </div>
  )
}

export default Banner