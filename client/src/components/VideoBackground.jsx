import React, { useEffect } from 'react'; 
import styles from "../styles/videoBackground.module.css"
import {  useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';
function VideoBackground({id}) {
     useTrailerVideo(id); 
     const trailerVideo = useSelector((state)=>state.movies.trailerVideo)

    const src = `https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`
  return (
   
    <div className={styles.container}>
        <iframe className={styles.frame} 
        src= {src}  title=" Trailer Video" allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; " ></iframe>
    </div>
  )
}

export default VideoBackground