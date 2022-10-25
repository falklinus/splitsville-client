import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin, useMe } from '../../hooks'
import { useRegister } from '../../hooks'
import styles from './auth.module.css'

export const Register = () => {
  const { register, error } = useRegister()
  const [registerInput, setRegisterInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await register(registerInput)
    location.reload()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Username
        <input
          className={styles.input}
          type='text'
          name='username'
          value={registerInput['username']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.username}</span>
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type='email'
          name='email'
          value={registerInput['email']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.email}</span>
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type='password'
          name='password'
          value={registerInput['password']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.password}</span>
      </label>
      <label className={styles.label}>
        Confirm password
        <input
          className={styles.input}
          type='password'
          name='confirmPassword'
          value={registerInput['confirmPassword']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.confirmPassword}</span>
      </label>
      <button className={styles.button} type='submit'>
        Do it
      </button>
    </form>
  )
}

export const Login = () => {
  const { login, error } = useLogin()
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  })

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await login(loginInput)
    location.reload()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type='email'
          name='email'
          value={loginInput['email']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.email}</span>
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type='password'
          name='password'
          value={loginInput['password']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.password}</span>
      </label>
      <button className={styles.button} type='submit'>
        Do it
      </button>
    </form>
  )
}

export const Auth = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('split_token')) {
      navigate('/')
    }
  }, [])

  const [activeForm, setActiveForm] = useState('login')

  return (
    <div className={styles.container}>
      <div className={styles['buttons-container']}>
        <button
          onClick={() => setActiveForm('login')}
          className={`${activeForm === 'login' ? styles.active : ''} ${
            styles.button
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveForm('register')}
          className={`${activeForm === 'register' ? styles.active : ''} ${
            styles.button
          }`}
        >
          Register
        </button>
      </div>
      {activeForm === 'login' && <Login />}
      {activeForm === 'register' && <Register />}
    </div>
  )
}
