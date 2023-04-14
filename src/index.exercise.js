import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {Logo} from 'components/logo'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

function App() {
  const [activeDialog, setActiveDialog] = React.useState('')

  const handleLogin = formData => {
    console.log(
      '🚀 ~ file: index.exercise.js:11 ~ handleLogin ~ formData:',
      formData,
    )
    setActiveDialog('')
  }

  const handleRegister = formData => {
    console.log(
      '🚀 ~ file: index.exercise.js:19 ~ handleRegister ~ formData:',
      formData,
    )
    setActiveDialog('')
  }

  return (
    <>
      <div>
        <Logo />
        <h1>Bookshelf</h1>
        <div>
          <button onClick={() => setActiveDialog('login')}>Login</button>
        </div>
        <div>
          <button onClick={() => setActiveDialog('register')}>Register</button>
        </div>
      </div>
      <LoginDialog
        isOpen={activeDialog === 'login'}
        onClose={() => setActiveDialog('')}
        onLogin={handleLogin}
      />
      <RegisterDialog
        isOpen={activeDialog === 'register'}
        onClose={() => setActiveDialog('')}
        onRegister={handleRegister}
      />
    </>
  )
}

function LoginDialog(props) {
  const {isOpen, onClose, onLogin} = props

  return (
    <Dialog aria-label="Login form" isOpen={isOpen} onDismiss={onClose}>
      <button onClick={onClose}>Close</button>
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin} />
    </Dialog>
  )
}

function RegisterDialog(props) {
  const {isOpen, onClose, onRegister} = props

  return (
    <Dialog aria-label="Registration form" isOpen={isOpen} onDismiss={onClose}>
      <button onClick={onClose}>Close</button>
      <h2>Register</h2>
      <LoginForm onSubmit={onRegister} buttonText="Register" />
    </Dialog>
  )
}

function LoginForm(props) {
  const {onSubmit, buttonText = 'Login'} = props

  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username
          <input name="username" type="text" autoComplete="username" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            name="password"
            type="password"
            autoComplete={
              buttonText === 'Login' ? 'current-password' : 'new-password'
            }
          />
        </label>
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App />)
