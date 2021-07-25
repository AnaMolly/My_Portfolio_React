import React from 'react';
import heroimg from '../../images/frontenddeveloper.png'
import me from '../../images/Analia.jpeg'

export default function About() {
  return (
    <div className="contentpages">
      <div className="hero" style={{ display:'flex', flexWrap:'wrap', justifyContent:'center'}}> 
            <img src={heroimg} alt="front end developer" style={{maxWidth: '100%'}}></img>
        </div> 
        <hr style={{marginTop:'50px'}}/>
      <h1 style={{padding:'45px 0px 20px 0px', fontSize: '60px', fontWeight:'200'}}>About Me</h1>
      <img src={me} style={{padding:'45px', maxWidth: '100%'}} alt="girl"></img>
      <p style={{fontSize:'23px', padding:"45px", lineHeight:'2'}}>
      Hi there! I'm Analia, a full-stack web developer with a background in digital marketing and a keen interest in front-end development. <br></br>Some of my past work can be found under the <a href="/portfolio" className="aboutlinks"> Portfolio</a> tab, and my skillset can be found under the <a href="/resume" className="aboutlinks"> Resume</a> tab.  <br></br>If you have any questions, please feel free to contact me!
      </p>
    </div>
  );
}
