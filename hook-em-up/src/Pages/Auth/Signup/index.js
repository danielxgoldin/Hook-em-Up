import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

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
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value})
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        setErrors(validations(currentUser, users))
        setIsSubmitting(true)
        localStorage.setItem('user', JSON.stringify(currentUser))
        localStorage.setItem('users', JSON.stringify(users))  
    }

    return (
        <div className="Container-group">
            <div className="Form-group">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>
                <form
                autoComplete="off"
                onSubmit={handleSignUpSubmit}
                className="Login-form"
                >
                    <div className="input-group">
                        <div>
                            {errors.firstName && <span className="error">{errors.firstName}</span> }
                            <label className="in-put">First Name</label>
                            <input
                            type="text"
                            className="input"
                            onChange={handleSignUpFormChange}
                            value={currentUser.firstName}
                            name="firstname"
                            placeholder="First Name"
                            />
                        </div>
                        <div>
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                            <label className="in-put">Last Name</label>
                            <input
                            type="text"
                            className="input"
                            onChange={handleSignUpFormChange}
                            value={currentUser.lastName}
                            name="lastname"
                            placeholder="Last Name"
                            />
                        </div>
                        <div>
                           {errors.email && <span className="error">{error.email}</span>}
                           <label className="in-put">Email</label>
                           <input
                           type="email"
                           className="input"
                           onChange={handleSignUpFormChange}
                           value={currentUser.email}
                           name="email"
                           placeholder="Email Address"
                           /> 
                        </div>
                        <div>
                            {errors.password && <span className="error">{errors.password}</span>}
                            <label className="in-put">Password</label>
                            <input
                            type="Password"
                            className="input"
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
                            className="input"
                            onChange={handleSignUpFormChange}
                            value={currentUser.passwordConfirm}
                            name="passwordConfirm"
                            placeholder="Confirm Password"
                            />
                        </div>
                        <div className="links">
                            <div className="link-div">
                                <span>
                                    Already have an account? Login{" "}
                                    <Link to="/Login" className="text-black-600 hover:underline">
                                        {" "}
                                        here.
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="button">
                                <IdentificationIcon
                                    className="my-auto h-5 w-6" 
                                    aria1-hidden="true"
                                />
                                Sign Up!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup