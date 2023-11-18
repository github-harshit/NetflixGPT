import React, {useState, useRef} from 'react'; 
import Header from './Header';
import styles from "../styles/signup.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { checkValidateSignUp } from '../utils/validate';
import { auth } from '../utils/firebase.js';
 import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
 import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice.js';
function SignUp() {
   const dispatch = useDispatch(); 
   const navigate = useNavigate(); 
     const [errMsg, setErrMsg] = useState(null); 

     const username = useRef();
     const email = useRef(); 
     const password = useRef(); 
     const confirmPassword = useRef(); 

     const handleClick = (event)=>{
         event.preventDefault(); 
         const res = checkValidateSignUp(email.current.value, password.current.value,confirmPassword.current.value ); 
         
         if(errMsg){
           setErrMsg(res);
           return ; 
         }
          // signup logic 

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user,  {
                displayName: username.current.value
              }).then(() => {
                const {uid, email, displayName} = auth.currentUser; 
                dispatch(addUser({
                  uid:uid, 
                  email:email,
                  displayName:displayName
                   
                }))
               
              }).catch((error) => {
               setErrMsg(error)
               
              });
             
             
               
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMsg(errorMessage); 
              // ..
            });

     }
     
  return (
    <div className='container'>
    <Header/>
    <div className={styles.background}>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
   </div>
    
    < div className={styles.formContainer}>
     <h2> Sign Up </h2>
        <form onSubmit={handleClick} >
        <input type='text' name='username' placeholder='Enter your Username' autoComplete='off' ref={username} />    
        <input type='text' name='email' placeholder='Email or phone number' autoComplete='off' ref={email} /> 
        <input type='password' name='password' placeholder='Password' ref={password}/>
        <input type='password' name='conformPassword' placeholder='Confirm Password' ref={confirmPassword}/>
        <button > Sign Up  </button>
         {errMsg!==null && <p className= {styles.err}>{errMsg}</p> }
        <p> Already Registerd ? <Link className={styles.link} to="/" ><span className={styles.signup} > Sign In  </span></Link></p>
      </form>
     </div>
     </div>
  )
}

export default SignUp