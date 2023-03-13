import React from 'react'
import useForms from './hooks/useForms'
import "/src/style/loginForms.css"

const initialForm = {
  name:"",
  password:""
}

const validationsForm = (form) => {
  let errors = {}
  if(!form.name.trim()){
   errors.name = "este campo no puede estar vacio"
  }
  return errors
}

export default function LoginForm() {
    const {form, error, loading, response,
           handleChange, handleBlur, handleSubmit} = useForms(initialForm, validationsForm)
  return (
    <>
        <h1 className='login-form-title'>Sign in</h1>
        <form className='login-form' onSubmit={handleSubmit}>
            <input className='login-input' placeholder='usuario' name='name' type='text'
              onBlur={handleBlur} onChange={handleChange} value={form.name} required></input>
              {error && <p className='errors'> {error.name} </p>}
            <input className='login-input' placeholder='contraseña' name='password' type='password'
              onBlur={handleBlur} onChange={handleChange} value={form.password} required></input>
              {error && <p className='errors'> {error.name} </p>}
            <button>Login</button>
        </form>
    </>
  )
}
