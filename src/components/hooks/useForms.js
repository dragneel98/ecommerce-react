import React, { useState } from 'react'

export default function useForms(initialForm, validateForm) {
 const [form, setForm] = useState(initialForm)
 const [error, setError] = useState({})
 const [loading, setLoading] = useState(false)
 const [response, setRespone] = useState(null)

 const handleChange = (e)=> {

 }

 const handleBlur = (e)=> {

 }

 const handleSubmit = (e)=> {

 }
    return {form, error, loading, response, handleChange, handleBlur, handleSubmit}
}
