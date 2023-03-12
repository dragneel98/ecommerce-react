import React, { useState } from 'react'
import useLogin from './hooks/useLogin'
import "/src/style/header.css"

function Header() {
  const {auth, handleAuth} = useLogin()
  return (
    <header className='header'>
      <h1 className='app-title'> Tienda React </h1>
       { auth 
       ? <button onClick={handleAuth}>logout</button>
       : <button onClick={handleAuth}>login</button>} 
       
    </header>
  )
}

export default Header