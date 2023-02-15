import React, { useEffect, useState } from 'react'
import {API_Key,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
    const[movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
            console.log(response.data.results[8]);
            setMovie(response.data.results[8])
        })
    },[])
  return (

    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}
     className='banner'>
       
        <div className='content'>
            <h1 className='title'>{movie ? movie.original_title:'' }</h1>
             <div className='banner-buttons'>
                <button className='buttons'>Play</button>
                <button className='buttons'>My List</button>

             </div>
             <h1 className='description'>{movie?movie.overview:''}</h1>
        </div>
      <div className="fade">

      </div>
    </div>
  )
}

export default Banner
