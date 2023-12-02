import  { useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addPopularMovies } from '../redux/movieSlice';
import { useSelector } from 'react-redux';

function usePopularMovies() {
    const dispatch = useDispatch(); 
    const popularMovies = useSelector((state)=>state.movies.popularMovies); 

    const url  = "https://api.themoviedb.org/3/movie/popular"; 
    const getPopularMovies = async()=>{
         const res = await fetch(url, options); 
         const data  = await res.json(); 
         dispatch(addPopularMovies(data.results)); 

    }
     useEffect(()=>{
         if(popularMovies===null){
             getPopularMovies(); 
         }
        
     }, [])
 
}

export default usePopularMovies; 