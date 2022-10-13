import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Register'
import Container from './Components/Container/Container'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="container mx-auto">
      <Container>
        <Header />
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