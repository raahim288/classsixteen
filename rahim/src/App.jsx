import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import { Forms } from './components/Forms'
import { Login } from './Login'

const App = () => {
  return (
    <div>App


<Routes>
  <Route path="/" element={<Forms />} />
  <Route path="/login" element={<Login />} />
  
</Routes>
    </div>
  )
}

export default App