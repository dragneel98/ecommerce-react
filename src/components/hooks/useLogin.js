import React, { useContext } from 'react'
import { LoginContext } from '../context/loginContext'

export default function useLogin() {
    const {auth, handleAuth} = useContext(LoginContext)
    

if(auth===undefined){
    throw new Error ("el contexto se esta intentando utilizar fuera del alcanze de su provider")
}
  return {auth, handleAuth}
}
