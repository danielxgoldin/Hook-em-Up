import React from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
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
                <div className='n-col'>
                    <a href='/'><img src='/images/logo/logo.png' className='logo' alt='' /></a>
                </div>
                <div className='n-col'>
                    <div className='icons'>
                        <a href='/'><span><FontAwesomeIcon icon={faArrowRightToBracket} />Login</span></a>
                        <a href='/'><span><FontAwesomeIcon icon={faHeart} /><span className='totalItem'>0</span></span></a>
                        <a href='/'><span><FontAwesomeIcon icon={faShoppingBag} /><span className='totalItem'>0</span></span></a>
                    </div>
                </div>
            </div>
            <div className='n-row'>
                <nav className='nav'>
                    <ul className='items'>
                        <li className='list'>Home</li>
                        <li className='list'>Shop</li>
                        <li className='list' >About</li>
                        <li className='list'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;