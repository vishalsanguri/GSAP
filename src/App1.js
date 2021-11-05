import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "./App1.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "./components/iphone.png";
import Back from "./components/iphoneback.png";
import Amazon from "./components/amazon.png";
import Netflix from "./components/netflix.png";
import Fries from "./components/fries.png";
import Donut from "./components/donut.png";
import Tablet from "./components/tablethand.png";
import Coke from "./components/coke.png";

export default function App1() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // gsap.utils.toArray(".panel").forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     scrub: true,
    //     pin: true,
    //     pinSpacing: false,
    //   });
    // });
    // ScrollTrigger.create({
    //   snap: {
    //     snapTo: 1 / 4,
    //     duration: 0.5,
    //   },
    // });
    // gsap.to(".fixed-container3", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".orange",
    //     markers: true,
    //     start: "top 80%",
    //     end: "top 75%",
    //     scrub: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // gsap.to(".circle-center3", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".orange",
    //     markers: true,
    //     start: "top 80%",
    //     end: "top 75%",
    //     scrub: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // gsap.to(".fixed-container2", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".purple",
    //     markers: true,
    //     start: "top 80%",
    //     end: "top 75%",
    //     scrub: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // gsap.to(".circle-center2", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".purple",
    //     markers: true,
    //     start: "top 80%",
    //     end: "top 75%",
    //     scrub: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
  }, []);
  return (
    <>
      <div className="circle-center1"></div>
      <div className="circle-center2"></div>
      <div className="circle-center3"></div>
      <div className="fixed-container1">
        <div className="left-container">hi</div>
        <div className="right-container">right</div>
      </div>
      <div className="fixed-container2">
        <div className="left-container">hi</div>
        <div className="right-container">right</div>
      </div>
      <div className="fixed-container3">
        <div className="left-container">hi</div>
        <div className="right-container">right</div>
      </div>
      <div className="panel pink">
        <div className="con darkpink sail-text">Sail to Sucess</div>
      </div>
      <div className="panel orange">
        <div className="con darkorange"></div>
        <div className="con1">
          <img
            className="iphone"
            src={Image}
            alt=""
            width="200px"
            height="50%"
          />
          <img
            className="iphoneback"
            src={Back}
            alt=""
            width="250px"
            height="50%"
          />
        </div>
      </div>
      <div className="panel purple">
        <div className="con darkpurple"></div>
        <div className="con1 justy">
          <img src={Donut} alt="" className="donut" />
          <img src={Coke} alt="" className="fries" />
          <img src={Fries} alt="" className="pizza" />
          <div className="hungry-text">hungry !</div>
        </div>
      </div>
      <div className="panel green">
        <div className="con darkgreen"></div>
        <div className="con1">
          <img src={Amazon} alt="" className="amazon" />
          <img src={Netflix} alt="" className="netflix" />
        </div>
      </div>
      <div className="panel white">
        <div className="con power-text">
          <div className="power-1">Feel the power .</div>
          <div className="shadow-text">Feel the power .</div>
        </div>
        <div className="con1 botton">
          <img src={Tablet} alt="" className="tablet" />
        </div>
      </div>
    </>
  );
}
