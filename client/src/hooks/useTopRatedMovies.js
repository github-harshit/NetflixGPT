import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../redux/movieSlice';
import { options } from '../utils/constants';
import { useSelector } from 'react-redux';

function useTopRatedMovies() {
  const dispatch = useDispatch(); 
   const topRatedMovies = useSelector((state)=>state.movies.topRatedMovies)
   const url  = "https://api.themoviedb.org/3/movie/top_rated"
  const getTopRatedMovies = async ()=>{
     const res = await fetch(url, options); 
     const data = await res.json(); 
     dispatch(addTopRatedMovies(data.results)); 
  }
   useEffect(()=>{
       if(topRatedMovies===null){
           getTopRatedMovies(); 
       }
     
   }, [])
  
}

export default useTopRatedMovies