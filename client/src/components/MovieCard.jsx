import React from 'react'; 
import { img_cdn } from '../utils/constants';
import styles from "../styles/movieCard.module.css"
function MovieCard({movie}) {
   if(!movie.poster_path){
     return null; 
   }
     
  return (
    <div className={styles.container}>
        
         <img className={styles.image} alt='poster' src= {img_cdn + movie.poster_path }/>
    </div>
  )
}

export default MovieCard