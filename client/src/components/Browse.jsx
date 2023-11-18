import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GPTSearch from './GPTSearch';
 import { useSelector } from 'react-redux';
function Browse() {
  useNowPlayingMovies(); 
  usePopularMovies(); 
  useTopRatedMovies(); 

  const gptSearch = useSelector((state)=>state.gpt.showGPTSearch); 

  return (
   

    <div>
       <Header/>
       { gptSearch ?
       <GPTSearch/>:
        <>
       <MainContainer/>
       <SecondaryContainer/>
       </> }
      
       
       

     </div>
  )
}

export default Browse; 