import { Button, Paper, TextField } from '@mui/material'
import { signInWithPopup, signInWithEmailAndPassword  ,  GoogleAuthProvider,sendPasswordResetEmail, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import auth from './components/config/firebase'  
// import {} from 'firebase/auth/cordova'
// import { } from 'firebase/auth/web-extension'

export const Login = () => {
 
 const[email, setEmail]  = useState("")
 const[password, Setpassword]  = useState("")

 

 

 const handlesubmit=()=>{

  console.log('email', email)
  console.log('password', password)

  let userObj ={
    
    email,
    
   }
  

     signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      console.log("userCredential", userCredential)
     localStorage.setItem('UserData', JSON.stringify(userObj))
      
     }).catch((err)=>{console.log(err)
     })

 }
 const handlegoogll=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
console.log(result)
    }).catch((error) => {
      console.log(error)
    }); 

}

const handlepassword=()=>{
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
       console.log("email sent",email)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
}
 
  return (
    <>
    <form >

<Paper>

  
    <TextField onChange={(e)=> setEmail(e.target.value)} label={'email'}/><br></br>
    <br />
    <TextField onChange={(e)=> Setpassword(e.target.value)} label={'password'}/>

    <Button  onClick={handlesubmit}>Submit</Button>
    <Button  onClick={handlegoogll}>Login with Google</Button>
    <Button  onClick={handlepassword}>Forget password</Button>
</Paper>
    </form>
    </>
  )
}
