import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/image/IMG_0275.png'
import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Yasin Ehsani via email @ yasin.ehsani73@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className='contactWrapper'>
        <div className="email-at contactItem">
          <p>Feel free to get in touch. You can email me at: </p>
          <EmailLink />
        </div>
        <div className='contactItem'>
          <img src={Logo} alt='logo' width='100%' />
        </div>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
