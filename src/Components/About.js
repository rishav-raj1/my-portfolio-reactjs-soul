import React from 'react';
import aboutimage from '../images/soul.jpeg';

function About(){
    return(
            <div id='about'>
            <div className='about-text'>
            <h1>UPCOMING PROJECT</h1>
            <p>This is a Social Media Application 'SOUL' and This application features is little bit similar to instagram. Work in Progress </p>
            <button>Read More</button>
            </div>

            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>

            </div>

    )
}
export default About;