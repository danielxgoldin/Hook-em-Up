import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Auth/Login/Login';
import Signup from './Pages/Auth/Signup/Register'
import Container from './Components/Container'
import Footer from './Components/Footer'
import Navbar from './NavBar/NavBar'

function App() {
  return (
    <div className="container mx-auto">
      <Container>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />}><p>login</p></Route>
          <Route path="/Signup" element={<Signup />}><p>signup</p></Route>
        </Routes>
        <Footer />
      </Container>
    </div>
  )
}

export default App