import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup'
import Container from './Components/Container'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="container mx-auto">
      <Container>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  )
}

export default App