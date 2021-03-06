import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Registration = ({ handleSuccessfulAuth }) => {
  const [info, setInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    registrationErrors: ''
  })

  const { email, password, passwordConfirmation, registrationErrors } = info;
  console.log('useHistory', useHistory)

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/registrations", {
        user: {
          email,
          password,
          passwordConfirmation
        }
      }, { withCredentials: true });
      console.log(res)
      if (res.data.status === 'created') {
        handleSuccessfulAuth(res.data);
        history.push('/dashboard');
      }
    } catch (err) {
      console.log(err)
    }

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