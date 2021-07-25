import React from 'react';
import portimg from '../images/portfolioimg.png'
import simimg from '../images/simmerimg.png'
import dayplanimg from '../images/dayplannerimg.png'
import techimg from '../images/techblogimg.png'
import weatherimg from '../images/weatherdashboardimg.png'
import tradeimg from '../images/tradeguideimg.png'

function Portfolio() {
  return (
    <div className="contentpages">
        <p style={{paddingBottom:'20px', fontSize:'60px'}}>Portfolio Pieces</p>
        <p style={{fontStyle:'italic', fontSize:'25px', padding:'30px', color: 'rgb(241, 42, 165)', borderTop:'thin solid lightgray'}}>Click on an image to view the application.</p>
        <div className="portfoliopieces">
        <div style={{maxWidth: '450px', margin:'12px'}}>
            <p className="portpiecetitle">TECH BLOG</p>
            <a href="https://github.com/AnaMolly/Tech_Blog" className="portpiecerepo">View Repository</a>
            <a href="https://ancient-earth-72402.herokuapp.com/" className="portfoliopiece"><img src={techimg} style={{padding:'15px', maxWidth: '100%'}} alt="blog"></img> </a>
        </div>
        <div style={{maxWidth: '450px', margin:'12px'}}>
            <p className="portpiecetitle">WEATHER DASHBOARD</p>
            <a href="https://github.com/AnaMolly/Weather_Dashboard" className="portpiecerepo">View Repository</a>
            <a href="https://anamolly.github.io/Weather_Dashboard/" className="portfoliopiece"><img src={weatherimg} style={{padding:'15px', maxWidth: '100%'}} alt="weather dashboard"></img></a>
        </div>
        <div style={{maxWidth: '450px', margin:'12px'}}>
            <p className="portpiecetitle">SIMMER COOKBOOK (Collaborative)</p>
            <a href="https://github.com/AnaMolly/Simmer_Cookbook" className="portpiecerepo">View Repository</a>
            <a href="https://simmer-cookbook.herokuapp.com/" className="portfoliopiece"> <img src={simimg} style={{padding:'15px', maxWidth: '100%'}} alt="website"></img> </a>
        </div>
        <div style={{maxWidth: '450px', margin:'12px'}}>
            <p className="portpiecetitle">MY PORTFOLIO (HTML & CSS)</p>
            <a href="https://github.com/AnaMolly/My_Portfolio" className="portpiecerepo">View Repository</a>
            <a href="https://anamolly.github.io/My_Portfolio/" className="portfoliopiece"> <img src={portimg} style={{padding:'15px', maxWidth: '100%'}} alt="portfolio"></img></a>
        </div>
        <div style={{maxWidth: '450px', margin:'12px'}}>
            <p className="portpiecetitle">TRADE GUIDE (Collaborative)</p>
            <a href="https://github.com/ErnestAr/Trade_Guide" className="portpiecerepo">View Repository</a>
           <a href="https://ernestar.github.io/Trade_Guide/" className="portfoliopiece"> <img src={tradeimg} style={{padding:'15px', maxWidth: '100%'}} alt="trade guide"></img></a> 
        </div>
        <div style={{maxWidth: '450px', margin:'12px'}}>
            <p className="portpiecetitle">DAY PLANNER</p>
            <a href="https://github.com/AnaMolly/Day_Planner" className="portpiecerepo">View Repository</a>
          <a href="https://anamolly.github.io/Day_Planner/" className="portfoliopiece"> <img src={dayplanimg} style={{padding:'15px', maxWidth: '100%'}} alt="planner"></img></a>  
        </div>
      
       
        </div>
       
    </div>
  );
}

export default Portfolio