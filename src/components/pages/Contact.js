import React from 'react';

// CONTACT PAGE

function Contact() {

 
  return (
    <div>
       <section className="contactme2">
       <h2>CONTACT INFORMATION:</h2>
       <p style={{color:"black", fontSize:'30px', padding:'50px', textAlign:'center', lineHeight:'1.5'}}>Hi there! Please feel free to contact me via phone number, email or Linkedin. I look forward to connecting!</p>
            
            <div class="contactcon"> 
            <p className="contactme2p"> 647-779-0749</p>
            <a className="contactme2a" href="mailto:analia.mohamdally@gmail.com">analia.mohamdally@gmail.com</a>
           
            <a className="contactme2a" href="https://www.linkedin.com/in/analia-mohamdally-1a7438179/">Linkedin</a>
            <a className="contactme2a" href="https://github.com/AnaMolly">GitHub</a>
            </div>
        </section> 
      
    </div>
  );
}


export default Contact