import React from 'react'
import GPTSearchBar from './GPTSearchBar'; 
import styles from "../styles/gptSearch.module.css"; 
import { background_url } from '../utils/constants';
function GPTSearch() {
  return (
    <div className={styles.container}>
     <div className={styles.background}>
      <img src={background_url}></img>
     </div>

         <GPTSearchBar/>
    </div>
  )
}

export default GPTSearch