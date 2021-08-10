import React from 'react'
import resume from "../../images/Analia_Mohamdally_Resume.pdf"
import resumeimg from "../../images/resumeimg.png"


// RESUME PAGE
export default function Resume() {
  return (
    <div className="resume">
      <div>
        {/* Proficiencies */}
      <h1>Proficiencies:</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>jQuery</p>
        <p>Boostrap</p>
        <p>Third-party APIs</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>MySQL</p>
        <p>MongoDB</p>
        <p>React</p>
      </div>
        <div>
        {/* Resume */}
          <h1>Resume:</h1>
          <p>Click <a href={resume}  target='_blank'>here</a> or the image below for a downloadable version of my resume.</p>
          <a href={resume} target='_blank' ><img src={resumeimg} alt="resume" style={{maxWidth:'300px', padding:'15px'}}></img></a>
        </div>
       
    </div>
  );
}
