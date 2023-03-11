import React, { useState } from 'react'

function Header() {
  const [auth, setAuth] = useState(false)

  const handleAuth = () => {
    {auth ? setAuth(false) : setAuth(true)}
  }
  return (
    <div className='header'>
       { auth 
       ? <button onClick={handleAuth}>logout</button>
       : <button onClick={handleAuth}>login</button>} 
       
    </div>
  )
}

export default Header