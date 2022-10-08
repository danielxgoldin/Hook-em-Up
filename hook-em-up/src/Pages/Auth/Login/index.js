import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

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
}