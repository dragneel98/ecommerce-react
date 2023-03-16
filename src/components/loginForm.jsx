import React, { useEffect } from "react";
import useForms from "./hooks/useForms";
import useLogin from "./hooks/useLogin";
import "/src/style/loginForms.css";

const initialForm = {
  name: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};
  //expresiones regulares
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errors.name = "este campo no puede estar vacio";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "este campo solo acepta letras y espacios";
  }

  if (!form.password) {
    errors.password = "este campo no puede estar vacio";
  } else if (form.password.length < 8) {
    errors.password = " el numero minimo de caracteres es 8";
  }

  return errors;
};

export default function LoginForm({ isOpen, closeModal }) {
  const {
    form,
    error,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForms(initialForm, validationsForm);

  const { auth, handleAuth } = useLogin();

  useEffect(() => {
    if(auth===true){
      closeModal()
    }
  }, [auth])

  return (
    <article className={`login-modal ${isOpen && "open"}`}>
      
      <div className="login-container">
        <button className="modal-close-button" onClick={closeModal}>X</button>
        <h1 className="login-form-title">Sign in</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            placeholder="usuario"
            name="name"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          ></input>
          {error && <p className="errors"> {error.name} </p>}
          <input
            className="login-input"
            placeholder="contraseña"
            name="password"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.password}
            required
          ></input>
          {error && <p className="errors"> {error.password} </p>}
          <button className="log-button" >login</button>
        </form>
      </div>
    </article>
  );
}
