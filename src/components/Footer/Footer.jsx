import React from 'react'
import './Footer.css'
import whatsapp_icon from '../../Assests/Images/whatsapp_icon.png'
import x_icon from '../../Assests/Images/x_icon.png'
import facebook_icon from '../../Assests/Images/facebook_icon.png'
import instagram_icon from '../../Assests/Images/instagram_icon.png'

const Footer = () => {
  return (
    <div className="container-footer" id='footer'>

    
      <div className='footer'>

        <div className="logo-and-icons">

            <div className='logo-text-footer'>Oretta</div>

            <div className="contact">
              <img className='img-size-whatsapp' src={whatsapp_icon} alt="" />
              <div>+237 655-86-33-80</div>
            </div>

            <div className="follow-us">
              <div>Suivez-nous</div>
              
              <div className="images-social-media">
                <a href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank' rel="noreferrer"><img className='img-size' src={facebook_icon} alt="" /></a>
                <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><img className='img-size' src={instagram_icon} alt="" /></a>
                <a href="https://twitter.com" target='_blank' rel="noreferrer"><img className='img-size-twitter' src={x_icon} alt="" /></a>
              </div>
             
            </div>
        </div>
        <div className="about-us">

            <div className='about-us-container-text'>

            <div className='about-us-text'>À Propos</div> 
            <div>
            Association des filles de L'école Nationale Supérieure de
            Travaux Publique,
            Elig-effa. Yaoundé, Cameroon. <br />
            <span className='sponsor'>Catherine ZE</span> porteuse du projet
            </div>
            </div>
          
        </div>

        <div className="newsletter-container">
          <div className='abonner-text'>Abonnez-vous à notre newsletter</div>
          <input type="email" placeholder='Votre email...' />
          <div className="newsletter-button">
            <button>S'Abonner</button>
          </div>
        </div>



      </div>

      <div className="copyrights">
        <hr />
        <div>Droits d'auteur © 2024 - Tous droits réservés</div>
      </div>

    </div>
  )
}

export default Footer