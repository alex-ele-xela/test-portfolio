import React from 'react';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
import './App.css';
import './aboutPageAnimations.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayPage : 'Cover',
      position : {}
    }
  }

  getTarget = (event) => {
    this.setDisplayPage(event.target.getAttribute('target'))
  }

  setDisplayPage = (page) => {
    this.setState({displayPage : page})
  }

  scrollTo = (elementName) => {
    const elem = document.getElementById(elementName)
    elem.scrollIntoView();
  }

  elementInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  animateAboutMe = () =>{
    const aboutMe = document.getElementById('aboutMe');
    const flag = this.elementInViewport(aboutMe);
    const aboutStroke = document.getElementById('aboutStroke');

    if (flag) {
      aboutStroke.style.animation = 'fill-aboutMe 1s ease forwards 2.1s';
      for (let i=1; i <= 7; i++){
        let el = document.getElementById('aboutStroke').children[i];
        let delay = i * 0.2;
        el.style.animation = `line-anim-in 1s ease forwards ${delay}s`;
      }
    } else {
        aboutStroke.style.animation = 'unfill-aboutMe 1s ease backwards';
        for (let i=1; i <= 7; i++){
          let el = document.getElementById('aboutStroke').children[i];
          let delay = i * 0.1;
          el.style.animation = `line-anim-out-${i} 1s ease`;
      }
    }
  }

  render() {
    setInterval(this.animateAboutMe, 100)

    return(
      <>
        <div className='page' id='Cover'>
          <Cover getTarget={this.getTarget} scrollTo={this.scrollTo}/>
        </div>

        <div className='page' id='About'>
          <About getTarget={this.getTarget}/>
        </div>
      </>
    );
  }
}

export default App;
