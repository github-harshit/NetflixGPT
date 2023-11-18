import  { useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addPopularMovies } from '../redux/movieSlice';

function usePopularMovies() {
    const dispatch = useDispatch(); 
    const url  = "https://api.themoviedb.org/3/movie/popular"; 
    const getPopularMovies = async()=>{
         const res = await fetch(url, options); 
         const data  = await res.json(); 
         dispatch(addPopularMovies(data.results)); 

    }
     useEffect(()=>{
         getPopularMovies(); 
     }, [])
 
}

export default usePopularMovies; 