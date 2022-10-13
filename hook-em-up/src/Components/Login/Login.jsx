import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, AuthProvider } from '../../Assets/js/Auth'
import './login.css';

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
    <div className="">
      <div className="form-group">
        <form
          autoComplete="off"
          onSubmit={handleSignIn}
          className="modal-content animate"
        >
        <div>
          <h2 className="title">Login</h2>
        </div>
          <div className="container">
              <label className="input">Email</label>
              <br></br>

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ref={emailRef}
                className="in-put"
                placeholder="Email Address"
                required
              />
              <br></br>
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