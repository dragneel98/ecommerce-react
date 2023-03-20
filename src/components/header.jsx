import React, { useState } from 'react'
import useLogin from './hooks/useLogin'
import useModals from './hooks/useModals'
import LoginForm from './loginForm'
import "/src/style/header.css"

function Header() {
  const {auth, handleAuth} = useLogin()
  const [logInModalOpen, loginOpenModal, loginCloseModal] = useModals(false)
  return (
    <header className='header'>
      <h1 className='app-title'> Tienda </h1>
       { auth 
       ? <button className='login-button' onClick={handleAuth}>logout</button>
       : <button className='login-button' onClick={loginOpenModal}>login</button>} 
       <LoginForm isOpen={logInModalOpen} closeModal={loginCloseModal}></LoginForm>
    </header>
  )
}

export default Header