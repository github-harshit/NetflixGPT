import React from 'react'
import GPTSearchBar from './GPTSearchBar'; 
import styles from "../styles/gptSearch.module.css"; 
import { background_url } from '../utils/constants';
import GPTMovieSuggestion from './GPTMovieSuggestion';
function GPTSearch() {
  return (
    <div style={{backgroundImage: `url(${background_url})`}} className={styles.container}>
     

         <GPTSearchBar/>
          <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch