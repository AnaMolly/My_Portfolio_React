import React from 'react';
import Project from '../Project'

import portimg from '../../images/portfolioimg.png'
import simimg from '../../images/simmerimg.png'
import dayplanimg from '../../images/dayplannerimg.png'
import techimg from '../../images/techblogimg.png'
import weatherimg from '../../images/weatherdashboardimg.png'
import tradeimg from '../../images/tradeguideimg.png'

const projects = [
    {
        title: 'TECH BLOG',
        image: techimg,
        hlink:'https://ancient-earth-72402.herokuapp.com/',
        alt:'blog',
        repo:'https://github.com/AnaMolly/Tech_Blog'
    },
    {
        title: 'WEATHER DASHBOARD',
        image: weatherimg,
        hlink:'https://anamolly.github.io/Weather_Dashboard/',
        alt:'dashboard',
        repo:'https://github.com/AnaMolly/Weather_Dashboard'
    },
    {
        title: 'SIMMER COOKBOOK (Collaborative)',
        image: simimg,
        hlink:'https://simmer-cookbook.herokuapp.com/',
        alt:'website',
        repo:'https://github.com/AnaMolly/Simmer_Cookbook'
    },
    {
        title: 'MY PORTFOLIO (HTML & CSS)',
        image: portimg,
        hlink:'https://anamolly.github.io/My_Portfolio/',
        alt:'portfolio',
        repo:'https://github.com/AnaMolly/My_Portfolio'
    },
    {
        title: 'TRADE GUIDE (Collaborative)',
        image: tradeimg,
        hlink:'https://ernestar.github.io/Trade_Guide/',
        alt:'trade guide',
        repo:'https://github.com/ErnestAr/Trade_Guide'
    },
    {
        title: 'DAY PLANNER',
        image: dayplanimg,
        hlink:'https://anamolly.github.io/Day_Planner/',
        alt:'planner',
        repo:'https://github.com/AnaMolly/Day_Planner'
    }
]

function Portfolio() {
    return (
      <div className="contentpages">   
            <p style={{paddingBottom:'20px', fontSize:'60px'}}>Portfolio Pieces</p>
            <p style={{fontStyle:'italic', fontSize:'25px', padding:'30px', color: 'rgb(241, 42, 165)', borderTop:'thin solid lightgray'}}>Click on an image to view the application.</p>
          <div  className="portfoliopieces">
              {projects.map((project)=>
              <Project title={project.title} image={project.image} hlink={project.hlink} alt={project.alt} repo={project.repo} />
              )}
          </div>
        
      </div>
    );
  }
  
  export default Portfolio