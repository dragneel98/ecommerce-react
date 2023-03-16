import React, { useState } from 'react'
import useLogin from './hooks/useLogin'
import useModals from './hooks/useModals'
import LoginForm from './loginForm'
import "/src/style/header.css"

function Header() {
  const {auth, handleAuth} = useLogin()
  const [logInModalOpen, loginHandleIsOpen] = useModals(false)
  return (
    <header className='header'>
      <h1 className='app-title'> Tienda </h1>
       { auth 
       ? <button onClick={handleAuth}>logout</button>
       : <button onClick={loginHandleIsOpen}>login</button>} 
       <LoginForm isOpen={logInModalOpen} closeModal={loginHandleIsOpen}></LoginForm>
    </header>
  )
}

export default Header