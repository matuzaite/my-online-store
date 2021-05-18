import React from 'react';
import './ContactPage.scss';
import { ReactComponent as InstagramLogo } from '../../assets/instagram.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';


const ContactPage = () => {
  return (
    <div className='contact-page'>
      <h1 className='heading'>Contact Us</h1>
      <div className='body'>
        <div>
          <h3>PRODUCTS & ORDERS</h3>
          <p>+44 (9) 9999999</p>
          <p>8:00 - 19:00</p>
          <p>Monday - Friday</p>
          <p>8:00 - 17:00</p>
          <p>Saturday</p>
        </div>
        <div>
          <h3>OUR EMAIL</h3>
          <p>info@urban.com</p>
          <p>careers@urban.com</p>
        </div>
      </div>
      <footer className='footer'>
        <h4>About</h4>
        <h4>Get Help</h4>
        <div className='social-media'>
          <InstagramLogo className='logo' />
          <FacebookLogo className='logo' />
          <TwitterLogo className='logo' />
        </div>
      </footer>
    </div>
  )
};

export default ContactPage;
