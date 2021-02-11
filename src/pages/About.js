import React from "react";
import Project from "../components/Project";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Project backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Chris Cooley</h1>
        <h2>Coding Student</h2>
      </Project>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Chris Cooley's Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I'm currently doing a bootcamp through the University of Utah to become a full stack web developer. Throughout my studies, I've been learning HTML, CSS, JavaScript, Node.js, MongDB, React.js and many other languages.
            </p>
            <p>
              I have a Bachelor's Degree in Psychology where I originally planned on becoming a counselor, but later chose to pursue a career with web development. I live in Saint George, UT, where I met my wife, Star. We just bought a house this past year.
            </p>
            <p>
              In my free time, I love playing ultimate frisbee, hiking, running, and bowling. I also love to just relax and watch a good movie.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
