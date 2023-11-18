import React from 'react'
import MovieList from './MovieList'; 
import { useSelector } from 'react-redux';
import styles from "../styles/secondaryContainer.module.css"
function SecondaryContainer() {
  const movies = useSelector((state)=>state.movies); 
  if(movies.nowPlayingMovies===null || movies.popularMovies===null || movies.topRatedMovies===null){
     return ; 
  }
  return (
    <div className={styles.container}>
       <div className={styles.top}> 
       <MovieList title= 'Now Playing' movies = {movies.nowPlayingMovies}/>
       </div>
      <MovieList title= 'Popular Movies' movies = {movies.popularMovies}/>
      <MovieList title= 'Top Rated' movies = {movies.topRatedMovies}/>
      <MovieList title= 'Now Playing' movies = {movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer