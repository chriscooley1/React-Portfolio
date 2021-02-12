import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Contact Me @
            </Link>
          </div>
          <div className='social-icons'>
          {/* eslint-disable-next-line */}
            <a
              className='social-icon-link GitHub'
              href='https://github.com/chriscooley1'
              target='_blank'
              aria-label='GitHub'
            >
              <i className="fab fa-github" />
            </a>
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link LinkedIn'
              href="https://www.linkedin.com/in/chris-cooley-65057b14/"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a> 
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/chris.cooley.146/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link'
              href='/src/images/MyResume.pdf'
              target='_blank'
              aria-label='Resume'
            >
              <i className="far fa-file" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;