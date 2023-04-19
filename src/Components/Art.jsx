import React, { useState, useEffect } from "react";
import { center4, corner4, edge8, random } from "./shapes";
import "animate.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { useRef } from "react";
import { entranceAnimation } from "../utilities/animationList";
import { ExitAnimation } from "../utilities/animationList";
function Art() {
  const nodeRef = useRef(null);
  const [change, setchange] = useState(false);
  const [selectAnimation, setSelectAnimation] = useState("animate__bounceIn");
  const [selectOutAnimation, setSelectOutAnimation] =
    useState("animate__bounceOut");

  const [tryCustomAnimation, setTryCustomAnimation] = useState(false);

  function randomNumber(upto) {
    return Math.floor(Math.random() * upto);
  }

  const [artList, setArtList] = useState([]);
  useEffect(() => {
    let tempList = [];
    for (let i = 0; i < 16; i++) {
      if (i == 5 || i == 6 || i == 9 || i == 10) {
        let centerarray = center4[randomNumber(3)];
        tempList.push(centerarray[randomNumber(4)]);
      } else if (i == 0 || i == 3 || i == 12 || i == 15) {
        let cornerarray = corner4[randomNumber(2)];
        tempList.push(cornerarray[randomNumber(4)]);
      } else {
        tempList.push(edge8[randomNumber(7)]);
      }
    }
    setArtList(tempList);
    // console.log(tempList);
  }, []);

  function generateArtList() {
    // console.log(randomNumber(3));
    setchange((v) => !v);

    let tempList = [];
    let centerarray = center4[randomNumber(3)];
    let cornerarray = corner4[randomNumber(2)];
    for (let i = 0; i < 16; i++) {
      if (i == 5 || i == 6 || i == 9 || i == 10) {
        tempList.push(centerarray[randomNumber(4)]);
      } else if (i == 0 || i == 3 || i == 12 || i == 15) {
        tempList.push(cornerarray[randomNumber(4)]);
      } else {
        tempList.push(edge8[randomNumber(7)]);
      }
    }
    setArtList(tempList);
  }
  function randomgenerate() {
    setchange((v) => !v);
    let tempList = [];
    for (let i = 0; i < 16; i++) {
      tempList.push(random[randomNumber(16)]);
    }
    // console.log(tempList);
    setArtList(tempList);
  }

  function userAnimation() {
    // console.log(selectAnimation);
    generateArtList();
  }

  return (
    <div className="flex flex-col ">
      <div className="bacdrop-blur-sm w-[250px] gap-2 py-4 grid grid-cols-4 place-content-center p-2">
        {artList.map((a, i) => (
          <div key={i}>
            <SwitchTransition key={i}>
              <CSSTransition
                key={change}
                timeout={600}
                classNames={{
                  enter: selectAnimation,
                  enterActive: selectAnimation,
                  enterDone: selectAnimation,
                  exit: "a",
                  exitActive: selectOutAnimation,
                  exitDone: "a",
                }}
              >
                <div className="animate__animated ">{a}</div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        ))}
      </div>
      {!tryCustomAnimation && (
        <div className="flex flex-col">
          <button
            onClick={generateArtList}
            className="w-[250px] mt-2 bg-[#111] py-2 text-white"
          >
            Sync Generate
          </button>
          <button
            onClick={randomgenerate}
            className="w-[250px] mt-2 py-2 bg-[#111] text-white"
          >
            Random Generate
          </button>
          <button
            onClick={() => setTryCustomAnimation(true)}
            className="w-[250px] mt-2 py-2 bg-[#111] text-white"
          >
            Try Custom Animation
          </button>
        </div>
      )}

      {tryCustomAnimation && (
        <div className="mt-4 flex flex-col gap-4 ">
          <button
            onClick={() => setTryCustomAnimation(false)}
            className="w-[250px] mt-2 py-2 bg-[#111] text-white"
          >
            Go Back
          </button>
          <p className="text-white">Select Enter Animation</p>
          <select onChange={(e) => setSelectAnimation(e.target.value)}>
            <option value="animate__bounceIn">Select Animation</option>
            {entranceAnimation.map((a, i) => (
              <option key={a.name} value={a.value}>
                {a.name}
              </option>
            ))}

            {/* <option value="animate__fadeInDown">fadeInDown</option>
            <option value="animate__fadeInLeft">fadeInLeft</option> */}
          </select>
          <p className="text-white">Select Exit Animation</p>
          <select onChange={(e) => setSelectOutAnimation(e.target.value)}>
            <option value="animate__bounceOut">Select Animation</option>

            {ExitAnimation.map((a, i) => (
              <option key={a.name} value={a.value}>
                {a.name}
              </option>
            ))}
          </select>
          <button
            onClick={userAnimation}
            className=" ml-2 bg-[#111] p-2 text-white"
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
}

export default Art;
