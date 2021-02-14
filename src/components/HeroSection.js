import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <p>My name is <strong>Chris Cooley</strong>.</p>
      <br></br>
      <p> I'm currently doing a bootcamp through the University of Utah to become a full stack web developer. Throughout my studies, I've been learning HTML, CSS, JavaScript, Node.js, MongDB, React.js and many other languages. I have a Bachelor's Degree in Psychology where I originally planned on becoming a counselor, but later chose to pursue a career with web development. I live in Saint George, UT, where I met my wife, Star. We just bought a house this past year. In my free time, I love playing ultimate frisbee, hiking, running, and bowling. I also love to just relax and watch a good movie. </p>
      <br></br>
      <p>Please check out my portfolio tab, photography tab (under construction), and follow me on GitHub and check out my resume below. Feel free to check out my other social links to learn more about me.</p>
    </div>
  );
}

export default HeroSection;