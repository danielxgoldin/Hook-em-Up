import React from 'react'
import './header.css'
import { GiBullHorns } from 'react-icons/gi'

const Header = () => {
  return (
    <header className='header'>
    <div className='header__logo'><GiBullHorns /> </div>

    <a href='/login'>Login</a>
    </header>
  )
}

export default Header