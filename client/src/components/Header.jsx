import React, {useEffect} from 'react'
import { addUser, removeUser } from '../redux/userSlice';
import { Outlet, useNavigate } from 'react-router-dom'
import styles from "../styles/header.module.css"; 
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
 import { useSelector,useDispatch  } from 'react-redux';
 import { onAuthStateChanged } from 'firebase/auth';

function Header() {
   const dispatch = useDispatch(); 
   const navigate = useNavigate(); 
    const user = useSelector((state)=>state.user); 
   const handleClick = ()=>{
    signOut(auth).then(() => {

     
       
    }).catch((error) => {
      // An error happened.
    });
   }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName} = user; 
        console.log("username", displayName); 
     
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
        <img className={styles.profile} src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'></img>
        <p onClick={handleClick} className={styles.signOut}> Sign Out </p>
         
         
       </div>
}
    
    </div>
     
     </>
    
      
      
  )
}

export default Header