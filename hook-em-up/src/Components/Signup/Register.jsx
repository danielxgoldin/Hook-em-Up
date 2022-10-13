import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Assets/js/Auth'
import './register.css';
import validations from '../../Assets/js/validations';

const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setErrors(validations(currentUser, users)) 
    setIsSubmitting(true)
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <div className="">
      <div className="form-group">
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
          className="modal-content animate"
        >
        <div>
          <h2 className="title">Sign Up</h2>
        </div>
          <div className="input-form">
            <div>
            {errors.firstName && <span className="error">{errors.firstName}</span>}
              <label className="input">First Name</label>
              <input
                type="text"
                className="in-put"
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
              />
              
            </div>

            <div>
            {errors.lastName && <span className="error">{errors.lastName}</span>}
              <label className="input">Last Name</label>
              <input
                type="text"
                className="in-put"
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
              />
              
            </div>
            <div>
            {errors.email && <span className="error">{errors.email}</span>}
              <label className="input">Email</label>
              <input
                type="email"
                className="in-put"
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"
              />
              
            </div>
            <div>
            {errors.password && <span className="error">{errors.password}</span>}
              <label className="input">Password</label>
              <input
                type="Password"
                className="in-put"
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div>
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
              <label className="input">Password Confirm</label>
              <input
                type="Password"
                className="in-put"
                onChange={handleSignUpFormChange}
                value={currentUser.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
              />
              
            </div>
            <div className="link">
              <div className="link-div">
                <span>
                  Already have an account? Login{" "}
                  <Link to="/signin" className="text-black-600 hover:underline">
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="button">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup