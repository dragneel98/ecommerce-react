import React from 'react'
import useForms from './hooks/useForms'
import "/src/style/loginForms.css"

const initialForm = {}

const validationsForm = (form) => {}
export default function LoginForm() {
    const {form, error, loading, response, handleChange, handleBlur, handleSubmit} = useForms(initialForm, validationsForm)
  return (
    <>
        <h1 className='login-form-title'>Sign in</h1>
        <form className='login-form'>
            <input className='login-input' placeholder='usuario'></input>
            <input className='login-input' placeholder='contraseña'></input>
            <button>Login</button>
        </form>
        
    </>
  )
}
