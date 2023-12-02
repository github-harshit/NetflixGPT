import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "../styles/gptMovieSugestion.module.css"
import MovieList from './MovieList'; 
import MovieCard from './MovieCard';


function GPTMovieSuggestion() {
  
   const gpt = useSelector((state)=>state.gpt);

   const {gptMovies} = gpt; 
    if(gptMovies===null){
       return; 
    }
    
    
  return (
        <div  className={styles.container}>
        
       <div className={styles.box}>
       {gptMovies.map((movie, index)=><MovieCard key={index}  movie={movie}/>)}

       </div>
     
     
    
        
        </div>
     
     
  )
}

export default GPTMovieSuggestion