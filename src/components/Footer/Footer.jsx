import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer2'>
      <div className='footer-logo'>
        <img className='footer-rekruit-img' src='./rekruit-logo2.svg'/>
        <div className='footer-icons'>
          <img  className='footer-icon' src='./fb-logo.svg'/>
          <img className='footer-icon' src='./twitter-logo.svg'/>
          <img className='footer-icon' src='./ig-logo.svg'/>
        </div>
      </div>
      <div className='footer-quicklink'>
        <p className='footer-header'>Quick Link</p>
          <ul className='footer-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Get signed up</li>
            <li>log in</li>
          </ul>
      
      </div>
      <div className='footer-support'>
      <p className='footer-header'>Support</p>
          <ul className='footer-list'>
            <li>FAQs</li>
            <li>Help</li>
            <li>Blogs</li>
          </ul>
      </div>
      <div className='footer-connect'>
      <p className='footer-header'>Connect with Us</p>
          <ul className='footer-list'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
      </div>
</div>
        <hr className='footer-hr'/>
  <p className='footer-copyright'>
  Copyright © 2023  REKRUIT
  </p>
    </div>
  )
}

export default Footer