import React from 'react'; 
import styles from "../styles/mainContainer.module.css"; 
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
function MainContainer() {
    const movies  = useSelector((state)=>state.movies?.nowPlayingMovies); 
    if(movies===null){
         return ; 
    }
     
     const getRandomMovie = (max, min)=>{
         const rand = Math.floor(Math.random() *(max-min+1) + min); 
         return rand; 
       
     }
     const randomInteger = getRandomMovie(0, movies.length-1); 
     const mainMovie = movies[randomInteger];
      
  return (
    <div className={styles.container}>
        <VideoTitle title = {mainMovie.original_title} overview = {mainMovie.overview}/>
        <VideoBackground id= {mainMovie.id}/>
    </div>
  )
}

export default MainContainer