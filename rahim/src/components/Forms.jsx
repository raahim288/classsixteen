import { Button, Paper, TextField } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import auth from './config/firebase'  
import { useNavigate } from 'react-router-dom'

export const Forms = () => {
 
 const[email, setEmail]  = useState("")
 const[password, Setpassword]  = useState("")
 const[username, setusername]  = useState("")
 const[name, setNAme]  = useState("")
 

 
const navigate=useNavigate();
 const handlesubmit=()=>{
  console.log('name', name)
  console.log('username', username)
  console.log('email', email)
  console.log('password', password)

  let userObj ={
    name,
    email,
    username
   }
  

     createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      console.log("userCredential", userCredential)
     localStorage.setItem('UserData', JSON.stringify(userObj))
      navigate('/login')
     }).catch((err)=>{console.log(err)
     })

 }
 
 
  return (
    <>
    <form >

<Paper>

    <TextField onChange={(e)=> setNAme(e.target.value)} label={'name'}/><br></br>
    <br />
    <TextField onChange={(e)=> setusername(e.target.value)} label={'username'}/><br></br>
    <br />
    <TextField onChange={(e)=> setEmail(e.target.value)} label={'email'}/><br></br>
    <br />
    <TextField onChange={(e)=> Setpassword(e.target.value)} label={'password'}/>

    <Button  onClick={handlesubmit}>Submit</Button>
</Paper>
    </form>
    </>
  )
}
