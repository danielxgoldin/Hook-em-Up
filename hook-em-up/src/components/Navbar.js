import React from 'react';
import '../styles/navbar.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'   

const Navbar = () => {
    return (
        <div className='n-container'>
            <div className='n-row'>
                <div className='n-col'>
                    <span className='n-email'>Hookemup@gmail.com</span>
                </div>
                <div className='n-col'>
                    <div className='socials'>
                        <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='n-row'>
                <nav className='nav'>
                    <ul className='items'>
                        <li className='list'></li>
                        <li className='list'></li>
                        <li className='list'></li>
                        <li className='list'></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;