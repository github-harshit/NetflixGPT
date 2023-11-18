

export const checkValidateLogin = (email, password)=>{
     const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); 
     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password); 
      if(!isEmailValid){
         return "Email id is not valid"
      }
      if(!isPasswordValid){
         return "Password is not valid "
      }
       return null; 
} 
 export const checkValidateSignUp = (email, password, confirmPassword)=>{
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); 
     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
     if(!isEmailValid){
        return "Email id is not valid"
     }
     if(!isPasswordValid){
        return "Password is not valid "
     }
      if(isEmailValid!==confirmPassword){
         return "Password and Confirm Password does not match "
      }
       return null; 
     
 }
 
 