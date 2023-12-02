import React, {useEffect, useRef, useState} from 'react'
import Header from './Header'; 
import styles from "../styles/login.module.css"; 
import { Link, useNavigate } from 'react-router-dom';
import { checkValidateLogin } from '../utils/validate';
import {  signInWithEmailAndPassword } from "firebase/auth";
 import {auth} from "../utils/firebase"
import { background_url } from '../utils/constants';
function Login() {
   const navigate = useNavigate(); 
   const [errMsg , setErrMsg] = useState(null);  
   const email = useRef(); 
   const password = useRef(); 

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
     
    
  return (
    <div style={{backgroundImage: `url(${background_url})`}}  className={styles.container}>
      <Header/>
     
      
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