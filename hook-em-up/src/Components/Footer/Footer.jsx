import React from 'react'
import './footer.css'
import { GiBullHorns } from 'react-icons/gi'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'><GiBullHorns /></a>

        <div className='footer__text'>
            <p>Hook-em-up</p>
            <small>all rights reserved</small>
        </div>

        <div className='footer__socials'>
            <a href='https://facebook.com'><AiFillFacebook /></a>
            <a href='https://instagram.com'><BsInstagram /></a>
            <a href='https://twitter.com'><AiFillTwitterSquare /></a>
        </div>
    </footer>
  )
}

export default Footer