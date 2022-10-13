import React from 'react'
import './footer.css'
/*import { GiBullHorns } from 'react-icons/gi'*/

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Logo</a>

        <div className='footer__text'>
            <p>Hook-em-up</p>
            <small>all rights reserved</small>
        </div>

        <div className='footer__socials'>
            <a href='https://facebook.com'></a>
            <a href='https://instagram.com'></a>
            <a href='https://twitter.com'></a>
        </div>
    </footer>
  )
}

export default Footer