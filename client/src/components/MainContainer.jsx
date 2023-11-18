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
     const mainMovie = movies[0];
      
  return (
    <div className={styles.container}>
        <VideoTitle title = {mainMovie.original_title} overview = {mainMovie.overview}/>
        <VideoBackground id= {mainMovie.id}/>
    </div>
  )
}

export default MainContainer