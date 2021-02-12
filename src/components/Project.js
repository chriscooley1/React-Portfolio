import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Project.css';

function Project() {
  return (
    <div className='project-container'>
      <img src='../images/img-2.jpg' alt=""/>
      <h1>ABOUT ME</h1>
      <p>I'm <strong>Chris Cooley</strong>. I'm currently doing a bootcamp through the University of Utah to become a full stack web developer. Throughout my studies, I've been learning HTML, CSS, JavaScript, Node.js, MongDB, React.js and many other languages. I have a Bachelor's Degree in Psychology where I originally planned on becoming a counselor, but later chose to pursue a career with web development. I live in Saint George, UT, where I met my wife, Star. We just bought a house this past year. In my free time, I love playing ultimate frisbee, hiking, running, and bowling. I also love to just relax and watch a good movie.
      </p>
    </div>
  );
}

export default Project;