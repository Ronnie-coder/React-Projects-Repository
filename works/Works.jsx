import React, { useState } from "react";
import "./works.scss";

const data = [
  {
    id: 1,
    title: "Web Application Development",
    description: "As a front-end developer, I build responsive web apps with HTML, CSS, JavaScript, React, and Tailwind CSS.",
    icon: "assets/mobile.png",
    img: "assets/dc.png",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "I create visually appealing and user-friendly interfaces using Figma and Adobe XD.",
    icon: "assets/mobile.png",
    img: "assets/ui.png",
  },
  {
    id: 3,
    title: "Blog",
    description: "I write about the latest trends in web development and design, sharing insights and tutorials.",
    icon: "assets/mobile.png",
    img: "assets/blogs.png",
  },
  // Add more items as needed
];

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {data.map((item, index) => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="Previous slide"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="Next slide"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}