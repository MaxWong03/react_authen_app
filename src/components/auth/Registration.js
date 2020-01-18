import React, { useState } from 'react';


const Registration = () => {
  const [info, setInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    registrationErrors: ''
  })

  const onSubmit = event => {
    event.preventDefault();
    console.log('info:', info);
  }

  const onChange = event => {
    const { name, value } = event.target;
    console.log('name:', name, 'value:', value)
    setInfo(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  const { email, password, passwordConfirmation, registrationErrors } = info;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
          required
        />
        <input
          type='password'
          name='passwordConfirmation'
          placeholder='Password Confirmation'
          value={passwordConfirmation}
          onChange={onChange}
          required
        />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Registration;