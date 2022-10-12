import React from 'react'
import '../Assets/css/footer.css'
import Logo from '../Assets/img/Logo.png'

const Footer = () => {
  return (
    <div className='container__footer-container'>
            <div className='container__logo'>
                <img src={Logo} alt=''></img>
            </div>
            <div className='row'>
                <div className='footer__middle'>   
                    <h2 >
                        Get In Touch
                    </h2>
                    <ul>
                        <li>
                            1-800-999-HOOK
                        </li>
                        <li>
                            <a href='mailto:HookemupLLC@gmail.com'>HookemupLLC@gmail</a>
                        </li>
                    </ul>
                    <div className='footer__title'>   
                    <h2 >
                        Address
                    </h2>
                    <article>
                        13313 Austin Dr,
                        Austin Texas,
                        77301
                    </article>
                </div>
                </div>
                
            </div>
        </div>
  )
}

export default Footer