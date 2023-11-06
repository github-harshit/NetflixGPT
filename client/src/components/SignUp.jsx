import React from 'react'; 
import Header from './Header';
import styles from "../styles/signup.module.css"
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='container'>
    <Header/>
    <div className={styles.background}>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
   </div>
    
    < div className={styles.formContainer}>
     <h2> Sign Up </h2>
        <form >
            
        <input type='text' name='email' placeholder='Email or phone number '/> 
        <input type='password' name='password' placeholder='Password'/>
        <input type='password' name='conformPassword' placeholder='Confirm Password'/>
        <button > Sign Up  </button>
        <p> Already Registerd ? <Link className={styles.link} to="/" ><span className={styles.signup} > Sign In  </span></Link></p>
      </form>
     </div>
     </div>
  )
}

export default SignUp