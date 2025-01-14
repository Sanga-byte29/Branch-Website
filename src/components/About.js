import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/etc.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import '../App.css';

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(500);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
    <div className="container">
      <h1>About Us</h1>
    </div>
    <section className="banner" id="about">
       <section>
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
            <div className="column">
              <div className="tabs">
                <div className="single-tab">
                  <h2>About</h2>
                </div>
                <div className="single-tab">
                  <h2>Skills</h2>
                </div>
                <div className="single-tab">
                  <h2>Experience</h2>
                </div>
              </div>
              <div className="tab-content">
                {/* about-content */}
                <div className="content-about">
                  <h2>My story</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore ratione fuga pariatur, molestias sequi non, ipsum magnam dolorem eos quasi illo culpa at, exercitationem consequatur rerum dignissimos similique voluptate!</p>
                  <h3>I am a react developer</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit est temporibus, illum iusto provident. Ex, voluptatum. Nulla eius corporis minima, quia praesentium et esse quae beatae impedit cum quas?</p>
                </div>
                {/* skill content */}
                <div className="content-skills">
                  <h2>Skills</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores reiciendis magnam voluptatem, modi nam eaque, obcaecati possimus recusandae quasi quaerat, illum eos! Ea magnam voluptas, iste nesciunt harum in?</p>
                  <h3>I am a web designer</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam, dolorum rerum adipisci amet aspernatur distinctio omnis recusandae, provident qui ratione sequi repudiandae? Numquam labore aspernatur rerum molestias saepe maiores.</p>

                  <div className="skills-row">
                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>Developer</h3>
                        <div className="progress">
                          <div className="progress-bar">
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>Developer</h3>
                        <div className="progress">
                          <div className="progress-bar">
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>Developer</h3>
                        <div className="progress">
                          <div className="progress-bar">
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="skills-column">
                      <div className="progress-wrap">
                        <h3>Developer</h3>
                        <div className="progress">
                          <div className="progress-bar">
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  {/* experience content */}
                  <div className="content-exp">
                    <div className="exp-column">
                      <h3>Web dEVELOPER</h3>
                      <span>2014-2022</span>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iure sequi vero fugit nulla facere ab exercitationem. Aliquam amet rem sapiente non voluptatum. Non hic nulla inventore incidunt delectus veritatis!</p>
                    </div>
                    <div className="exp-column">
                      <h3>Web dEVELOPER</h3>
                      <span>2014-2022</span>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iure sequi vero fugit nulla facere ab exercitationem. Aliquam amet rem sapiente non voluptatum. Non hic nulla inventore incidunt delectus veritatis!</p>
                    </div>
                    <div className="exp-column">
                      <h3>Web dEVELOPER</h3>
                      <span>2014-2022</span>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iure sequi vero fugit nulla facere ab exercitationem. Aliquam amet rem sapiente non voluptatum. Non hic nulla inventore incidunt delectus veritatis!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
       </section>
    </section>
    </>
  );
};
