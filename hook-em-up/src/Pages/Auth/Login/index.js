import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth,AuthProvider } from '../../../Assets/js/Auth'
import { LoginIcon } from '@heroicons/react/outline'
import '../../../Assets/css/login.css';

const Login = () => {
const { currentUser, login, setCurrentUser, setIsSubmitting, loggedIn } = useAuth()


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error!")
    }
    setIsSubmitting(false)
  }

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  return (
    <div className="Container-group">
      <div className="form-group">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignIn}
          className="login-form"
        >
          <div className="input-form">
            <div>
              <label className="input">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ref={emailRef}
                className="in-put"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label className="input">Password</label>
              <input
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="in-put"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div className="link">
              <div className="link-div">
                <span>
                  Don't have an account? Sign up{" "}
                  <Link to="/signup" className="text-black-600 hover:underline">
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="button">
                <LoginIcon className="my-auto h-5 w-6" aria1-hidden="true" />
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login                                                             