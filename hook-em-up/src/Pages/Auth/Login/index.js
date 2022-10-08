import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//function to handle login functionality
const Login = () => {
    const { user, login, setUser, setIsSubmitting, loggedIn } = useAuth()

    //set two states for login variables email and password
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert('error')
        }
        setIsSubmitting(false)
    }

    const navigate = useNavigate()

    useEffect(() => {
        loggedIn && navigate('/')
    }, [loggedIn])

    //return rendered Login 
    return (
        <div className='Container-group'>
            <div className='Form-group'>
                <div>
                    <h2 className='title'>Login</h2>
                </div>
                <form
                autoComplete='off'
                onSubmit={handleLogin}
                className="Login-form"
                >
                    <div className='input-group'>
                        <div>
                            <label className='in-put'>Email</label>
                            <input
                                type="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                ref={emailRef}
                                className="input"
                                placeholder='Email Address'
                                required   
                            />
                        </div>
                        <div>
                            <label className='in-put'>Password</label>
                            <input
                                type="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                ref={passwordRef}
                                className='input'
                                placeholder='Password'
                                required
                            />
                        </div>
                        <div className='links'>
                            <div className='links-div'>
                                <span>
                                    No Account? Sign Up{" "}
                                    <Link to="/signup" className="text-black-600 hover:underline">
                                        {" "}
                                        here!
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='button'>
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

//export Login file
export default Login