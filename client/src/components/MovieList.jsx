import React from 'react'
import styles from "../styles/movieList.module.css"
import MovieCard from './MovieCard'
function MovieList({title, movies}) {
    
  return (
    <div className={styles.container}>
        <div>
            <h2 className={styles.heading}>{title}</h2>
             <div className={styles.moviesContainer}>
                 {movies.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
               
             </div>
        </div>
    </div>
  )
}

export default MovieList