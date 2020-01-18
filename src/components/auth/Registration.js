import React, { useState } from 'react';

const Registration = () => {
  const [info, setInfo] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: ''
  })

  const onSubmit = event => {
    console.log('form submitted');
    event.preventDefault();
  }

  const onChange = event => {
    const { name, value } = event.target;
    setInfo(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  const { email, password, password_confirmation, registrationErrors } = info;

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
      </form>
    </div>
  )
}

export default Registration;