import React from 'react'
import '../Assets/css/footer.css'

const Footer = () => {
  return (
    <div className='container__footer-container'>
        <div className='container__footer-box'>
            <div className='container__logo'>
                <img src='' alt=''></img>
            </div>
            <div className='row'>
                <div className='col'>   
                    <h2 className='footer__title'>
                        Contact
                    </h2>
                    <ul>
                        <li>
                            1-800-999-HOOK
                        </li>
                        <li>
                            HookEmUpLLC@gmail.com
                        </li>
                    </ul>
                </div>
                <div className='col'>   
                    <h2 className='footer__title'>
                        Corporate
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