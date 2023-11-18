import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
function Browse() {
  useNowPlayingMovies(); 
  usePopularMovies(); 
  useTopRatedMovies(); 

  return (
   

    <div>
       <Header/>
       <MainContainer/>
       <SecondaryContainer/>
       

     </div>
  )
}

export default Browse; 