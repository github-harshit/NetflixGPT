

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../redux/movieSlice';
import { options } from '../utils/constants';
function useNowPlayingMovies() {
    const dispatch = useDispatch(); 
    const nowPlayingMovies = useSelector((state)=>state.movies.nowPlayingMovies); 

    const getNowPlayingMovies = async ()=>{
     const res  = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", options ); 
     const data  = await res.json(); 
    
     dispatch(addNowPlayingMovies(data.results)); 
  }
   useEffect(()=>{
      if(nowPlayingMovies===null){
          getNowPlayingMovies(); 
      }
      
   }, [])
 
}

export default useNowPlayingMovies; 
