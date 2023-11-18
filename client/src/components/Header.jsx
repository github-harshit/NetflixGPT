import React, {useEffect} from 'react'
import { addUser, removeUser } from '../redux/userSlice';
import { Outlet, useNavigate } from 'react-router-dom'
import styles from "../styles/header.module.css"; 
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
 import { useSelector,useDispatch  } from 'react-redux';
 import { onAuthStateChanged } from 'firebase/auth';
import { toggleGPTSearch } from '../redux/gptSlice';
import { changeLanguage } from '../redux/configSlice';

function Header() {
   const dispatch = useDispatch(); 
   const navigate = useNavigate(); 
    const user = useSelector((state)=>state.user); 
    const gptShow = useSelector((state)=>state.gpt.showGPTSearch)
   const handleClick = ()=>{
    signOut(auth).then(() => {

     
       
    }).catch((error) => {
      // An error happened.
    });
   }
    const handleGPTSearch = ()=>{
       dispatch(toggleGPTSearch()); 
    }
     const handleLanguageChange = (event)=>{
       dispatch(changeLanguage(event.target.value))
     }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName} = user; 
        
     
        dispatch(addUser({uid, email, displayName})); 
        navigate("/browse")
        
        
       
        // ...
      } else {
        // User is signed out
        dispatch(removeUser()); 
        navigate("/"); 
       
      }
    });

    return ()=> unsubscribe(); 
  }, [])

  return (
     <>
     <div className={styles.header}>
      <img className={styles.logo} src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
       
       {user && <div className={styles.user}>
        {gptShow && 
        <select onChange={handleLanguageChange}>
          <option value="en">ENGLISH </option>
          <option value="hindi">HINDI</option>
          <option value="spanish">SPANISH</option>
        </select>
    }
        <button onClick={handleGPTSearch} className={styles.btn}>{gptShow ? "HomePage" :"GPT Search"}</button>
        <img className={styles.profile} src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'></img>
        <p onClick={handleClick} className={styles.signOut}> Sign Out </p>
         
         
       </div>
}
    
    </div>
     
     </>
    
      
      
  )
}

export default Header