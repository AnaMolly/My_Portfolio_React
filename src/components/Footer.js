import React from 'react';
import gitimg from '../images/githublogo.png'
import linkimg from '../images/linkedinlogo.png'
import stackimg from '../images/stacklogo.png'


// FOOTER COMPONENT
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center mb-5">
        <div className="footerlogos">
          <a href="https://github.com/AnaMolly"><img src={gitimg} className="logos" style={{maxWidth:'35px', margin:'10px',opacity:"0.4"}} alt="github logo"></img></a>
          <a href="https://www.linkedin.com/in/analia-mohamdally-1a7438179/"><img src={linkimg} className="logos" style={{maxWidth:'35px', margin:'10px', opacity:"0.4"}} alt="linkedin logo"></img></a>
          <a href="https://stackexchange.com/users/22293447/analia"><img src={stackimg} className="logos" style={{maxWidth:'35px', margin:'10px',opacity:"0.4"}} alt="twitter logo"></img></a>
        </div>
        <p>&copy; 2021 - Made by Analia</p>
      </div>
    </footer>
  );
};

export default Footer; 