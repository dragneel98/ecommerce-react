import React, { useState } from 'react'
import useLogin from './hooks/useLogin'

function Header() {
  const {auth, handleAuth} = useLogin()
  return (
    <div className='header'>
       { auth 
       ? <button onClick={handleAuth}>logout</button>
       : <button onClick={handleAuth}>login</button>} 
       
    </div>
  )
}

export default Header