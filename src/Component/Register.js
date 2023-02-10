import React from 'react'
import { useState } from 'react';

export function Register() {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const handleChange= e => {
    console.log(e.target)
  }



  return (
 
    <form>
      <label htmlFor='email'>Email</label>
      <input
      type="email"
      name='email'
      placeholder='Tu correo aquí'
      onChange={handleChange}
      />

      <label htmlFor='password'>Password</label>
      <input
      type="password"
      name='password'
      id= "password"
      onChange={handleChange}
      />

    <button>Registro</button>



    </form>

  )
}

