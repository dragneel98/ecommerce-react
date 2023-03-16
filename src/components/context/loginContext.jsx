import React, { createContext, useState } from 'react'

export const LoginContext = createContext()

export default function LoginProvider({children}) {
    const [auth, setAuth] = useState(false)
    
    const handleAuth = () => {
        {auth ? setAuth(false) : setAuth(true)}
       
    }
  return (
    <LoginContext.Provider value={
        {auth, handleAuth}
    }>
    {children}
    </LoginContext.Provider>
  )
}
