import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Yasin (Mahmoud) Ehsani</h2>
        <p><a href="mailto:yasin.ehsani73@gmail.com">yasin.ehsani73@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I'm Mahmoud but my friends call me Yasin. So, you can call me Yasin too. I like coding and I am Apple fan. After codes, I like Camping and being in Nature.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yasin Ehsani <Link to="/">website</Link>.</p>
    </section>
  </section>
);

export default SideBar;
