import { createSlice } from "@reduxjs/toolkit";
 const gptSlice = createSlice({
     name: 'gpt', 
     initialState: {
        showGPTSearch:false, 
        gptMovies: null, 
        gptSearchResults: null ,
        

     }, 
     reducers: {
         toggleGPTSearch :(state)=>{
             state.showGPTSearch = !state.showGPTSearch
         },
          addGPTMovies: (state, action)=>{
            const {gptMovies, gptSearchResults} = action.payload; 
             state.gptMovies= gptMovies; 
             state.gptSearchResults = gptSearchResults;  
          }, 
          removeGPTMovies: (state)=>{
             state.gptMovies= null; 
             state.gptSearchResults=null
          }
         

     }
 })
  
  export const {toggleGPTSearch, addGPTMovies, setGptShimmer} = gptSlice.actions;
   export default gptSlice.reducer; 