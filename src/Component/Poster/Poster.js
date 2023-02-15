import React,{useEffect,useState} from 'react'
import './Poster.css'
import {API_Key,imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'
import axios from '../../axios'
function Poster(props) {
    const[movie,setMovie]=useState([])
    const[url,setUrl]=useState('')
    useEffect(()=>{
       axios.get(`discover/tv?api_key=${API_Key}&with_networks=213`).then(response=>{
         setMovie(response.data.results);
       })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
      };
      const handleChange=(id)=>{
        console.log(id);
        axios.get(
            `/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
                if (response.data.results.length!==0) {
                    setUrl(response.data.results[0])
                }else{
                console.log(response.data);
                }
            })
      }
  return (
    <div className='row'>
         <h2>{props.title}</h2>
         <div className="posters">
         
            {movie.map((obj)=>{
               return <img onClick={()=>handleChange(obj.id)} className='poster' src={`${props.isSmall?imageUrl+obj.poster_path:imageUrl+obj.backdrop_path}`} alt="" />
            })}
          
         </div>
          {url && <Youtube videoId={url.key} opts={opts} />}
    </div>
  )
}

export default Poster
