import React from 'react';


function Project(props) {
  return (
    <div className="contentpages">
        <div className="portfoliopieces">
        <div style={{maxWidth: '450px', margin:'12px'}} >
            <p className="portpiecetitle">{props.title}</p>
            <a href={props.repo} className="portpiecerepo">View Repository</a>
            <a href={props.hlink} className="portfoliopiece"><img src={props.image} style={{padding:'15px', maxWidth: '100%'}} alt={props.alt}></img> </a>
        </div>
        </div>
       
    </div>
  );
}

export default Project