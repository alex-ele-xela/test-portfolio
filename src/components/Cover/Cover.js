import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import Particles from 'react-tsparticles';
import particleProps from './particleProps';
import './Cover.css';

const Cover = ({getTarget, scrollTo}) => {
    const rotatingText = [
        'Alex Prateek Shankar',
        'a Programmer',
        'a Web Developer',
        'a Mathematician'
    ]

    return (
        <div className='fullPage coverColour flex flex-column-l justify-center items-center pa0 ma0'>
            <Particles
                className='fullPage back'
                id="tsparticles"
                options={particleProps} />

            <div className='tc front'>
                <div id='hello' className='mont-bold f3'>
                    Hello there, I am
                </div>

                <div className='mont-xbold f3 ma0 pa0'>
                    <h1 id='rotatingText' className='pa2 ma1 flex items-center justify-center'><ReactRotatingText items={rotatingText} typingInterval='75' /></h1>
                </div>

                <hr className='zoomIn'/>
            </div>

            <button 
                className='scrollBtn learnBtn pointer popUp' 
                onClick={() => scrollTo('About')}>
                Learn More !!
            </button>

            <div className='flap learnFlap popUp'></div>
        </div>
    );
}


export default Cover;
