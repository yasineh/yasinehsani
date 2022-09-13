import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yasin Ehsani's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p>
          Above all, I love writing code, I have 4 years of experience in iOS and also, I have 
some experience in both Frond-End and Back-End. I have good knowledge of Swift 
and Java and also, I have some experience with Objective-C, Android, and JavaScript. 
Excited to pursue new companies to grow my skills and experience new challenges. 
Ready for a fresh start and skill developments.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        {/* <Link to="/projects">projects</Link>, {' '} */}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
