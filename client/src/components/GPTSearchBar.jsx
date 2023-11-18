import React from 'react'; 
import styles from "../styles/gptSearchBar.module.css"
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
function GPTSearchBar() {
     const code = useSelector((state)=>state.config.lang); 
      
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <input type='text' className={styles.input}
             placeholder={lang[code].gptSearch}
             />
             <button type='submit' className={styles.btn}> {lang[code].search}</button>
        </form>

    </div>
  )
}

export default GPTSearchBar