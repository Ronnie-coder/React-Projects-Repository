import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      // More concise and impactful strings
      strings: ['Crafting Digital Experiences', 'Developing Modern Web Solutions'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/man.png" alt="CodeRon Logo" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Innovation Meets Design</h2>
                <h1>CodeRon</h1>
                <h3>
                    <span className="highlight">Web Development Specialist</span>
                    <span ref={textRef}></span>
                </h3>
            </div>
            <a href="#portfolio" className="scroll-indicator">
                <img src="assets/down.png" alt="View Portfolio" />
            </a>
        </div>
    </div>
  )
}