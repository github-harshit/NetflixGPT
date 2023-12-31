import React, {useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../redux/movieSlice';
import { options } from '../utils/constants';
function useTrailerVideo(id) {
    const dispatch = useDispatch(); 
     const trailerVideo = useSelector((state)=>state.movies.trailerVideo); 
    
    const url = `https://api.themoviedb.org/3/movie/${id}/videos`
   const getMovieVideo =  async ()=>{
       const res = await fetch(url, options); 
       const data  = await res.json(); 
      
       const trailers = data.results.filter((vid)=>vid.type==="Trailer");
       const trailer = trailers.length===0 ? data.results[0] : trailers[0]; 
        
        dispatch(addTrailerVideo(trailer)); 
   }
   useEffect(()=>{
      if(trailerVideo===null){
           getMovieVideo(); 
      }
        
   }, [])
}

export default useTrailerVideo