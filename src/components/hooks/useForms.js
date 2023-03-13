import React, { useState } from 'react'
import useLogin from './useLogin'

export default function useForms(initialForm, validateForm) {
 const [form, setForm] = useState(initialForm)
 const [error, setError] = useState({})
 const [loading, setLoading] = useState(false)
 const [response, setResponse] = useState(null)
 const {auth, handleAuth} = useLogin()
 
 const handleChange = (e)=> {
    const {name, value} = e.target
    setForm({
        ...form,
        [name]: value
    })
 }

 const handleBlur = (e)=> {
    handleChange(e)
    setError(validateForm(form))
 }

 const handleSubmit = (e)=> {
   e.preventDefault()
   setError(validateForm(form))

   if(Object.keys(error).length === 0){
      console.log("se envio el formulario");
      handleAuth()
   }

 }
    return {form, error, loading, response, handleChange, handleBlur, handleSubmit}
}
