import React, { useEffect, useState } from 'react'
import { useNavigate, redirect } from 'react-router-dom'
import { useLogin } from '../../hooks'
import { useRegister } from '../../hooks'
import { useAuth } from '../../hooks/useAuth'
import styles from '../../styles/landing.module.css'

export const Register = () => {
  const navigate = useNavigate()
  const { register, loading, error } = useRegister()
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
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Username
        <input
          type='text'
          name='username'
          value={registerInput['username']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.username}</span>
      </label>
      <label>
        Email
        <input
          type='email'
          name='email'
          value={registerInput['email']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.email}</span>
      </label>
      <label>
        Password
        <input
          type='password'
          name='password'
          value={registerInput['password']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.password}</span>
      </label>
      <label>
        Confirm password
        <input
          type='password'
          name='confirmPassword'
          value={registerInput['confirmPassword']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.confirmPassword}</span>
      </label>
      <button type='submit'>Do it</button>
    </form>
  )
}

export const Login = () => {
  const navigate = useNavigate()
  const { login, loading, error } = useLogin()
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
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Email
        <input
          type='email'
          name='email'
          value={loginInput['email']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.email}</span>
      </label>
      <label>
        Password
        <input
          type='password'
          name='password'
          value={loginInput['password']}
          onChange={handleChange}
        />
        <span className={styles.error}>{error?.password}</span>
      </label>
      <button type='submit'>Do it</button>
    </form>
  )
}

export const Auth = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user?.id) {
      redirect('/')
    }
  }, [user?.id])

  const [activeForm, setActiveForm] = useState('login')

  return (
    <div className={styles.container}>
      <div className={styles['buttons-container']}>
        <button
          onClick={() => setActiveForm('login')}
          className={activeForm === 'login' ? styles.active : ''}
        >
          Login
        </button>
        <button
          onClick={() => setActiveForm('register')}
          className={activeForm === 'register' ? styles.active : ''}
        >
          Register
        </button>
      </div>
      {activeForm === 'login' && <Login />}
      {activeForm === 'register' && <Register />}
    </div>
  )
}
