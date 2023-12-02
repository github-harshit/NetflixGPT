import React, { useState } from 'react'; 
import styles from "../styles/gptSearchBar.module.css"
import lang from '../utils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import openai from '../utils/openAI';
 import { useRef } from 'react';
import { options } from '../utils/constants';
import { addGPTMovies, setGptShimmer } from '../redux/gptSlice';

function GPTSearchBar() {
  
   const dispatch = useDispatch(); 
    const searchText = useRef(null); 
     const code = useSelector((state)=>state.config.lang); 
     
      const handleSubmit = async (event)=>{
       
        console.log("handle submit is called ")
         event.preventDefault(); 
         // Api call to open AI 
          const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + 
                            searchText.current.value + "give only 5 movies names in comma separted format, remember comma format is compulsory  like Example1, Example2, Example3, Example4, Example5 "
         const gptResult  = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
         
        if(!gptResult.choices){
          return; 

        }
        
        const gptSearchResults = gptResult.choices?.[0].message?.content.split(","); 
        const lowercaseSearchResults = gptSearchResults.map((movie) => movie.toLowerCase().trim());
        console.log(lowercaseSearchResults); 

        const  promiseArray = gptSearchResults.map((movie)=> fetchMovieTMDB(movie)); 
        
        const finalRes = await Promise.all(promiseArray); 
        const result = finalRes.flat(1); 
        
        
        const filteredMovies = lowercaseSearchResults.map((movie)=>{
           return  result.filter((m)=>m.title.toLowerCase()==movie);
        });
         
        const finalMovies  = filteredMovies.flat(1); 
        console.log(finalMovies); 
        

        
         dispatch(addGPTMovies({
           gptMovies: finalMovies, 
           gptSearchResults: gptSearchResults
         }))
        


      }

      const fetchMovieTMDB= async (movie)=>{
         const url =`https://api.themoviedb.org/3/search/movie?query=
         ${movie} &include_adult=false&language=en-US&page=1`
        const res = await fetch(url, options);
         const data  = await res.json();
         return data.results; 
         
      }

      
        
      
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input ref={searchText} type='text' className={styles.input}
             placeholder={lang[code].gptSearch}
             />
             <button type='submit' className={styles.btn}> {lang[code].search}</button>
        </form>
      
         

    </div>
  )
}

export default GPTSearchBar