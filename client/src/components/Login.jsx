import React, {useEffect, useRef, useState} from 'react'
import Header from './Header'; 
import styles from "../styles/login.module.css"; 
import { Link, useNavigate } from 'react-router-dom';
import { checkValidateLogin } from '../utils/validate';
import {  signInWithEmailAndPassword } from "firebase/auth";
 import {auth} from "../utils/firebase"

function Login() {
   const navigate = useNavigate(); 
   const [errMsg , setErrMsg] = useState(null);  

 
 
    const handleClick = (event)=>{
        event.preventDefault(); 
         
         const res = checkValidateLogin(email.current.value, password.current.value); 
         
          if(errMsg){
             setErrMsg(res);  
             return ; 
          }
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             setErrMsg(errorMessage)
          });


    }
     const email = useRef(); 
     const password = useRef(); 

    
  return (
    <div className='container'>
      <Header/>
      <div className={styles.background}>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
     </div>
      
      < div className={styles.formContainer}>
       <h2> Sign In </h2>
          <form onSubmit={handleClick} >
              
          <input type='text' name='email' placeholder='Email or phone number ' ref={email} autoComplete='off' /> 
          <input type='password' name='password' placeholder='Password' ref={password}/>
          <button > Sign In </button>
            { errMsg!==null && <p className= {styles.err}> {errMsg} </p>}
          <p> New to Netflix? <Link to= "/signup" className= {styles.link}><span className={styles.signup}> Sign Up Now  </span></Link></p>
        </form>
       </div>
       </div>
      
     
  )
}

export default Login