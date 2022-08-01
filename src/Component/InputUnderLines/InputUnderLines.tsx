import React, { useState } from "react";
import "./InputUnderLines.css";

export const InputUnderLines = () => {
  const [focus, setFocus] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ width: "20rem", margin: "1rem", overflow: "hidden" }}>
      <input
        style={{
          outline: "none",
          border: "none",
          width: "100%",
          padding: "0.2rem  0",
          fontSize: "1rem",
        }}
        onFocus={() => {
          //! hover
          setFocus(true);
          setPlaying(true);
        }}
        onBlur={() => {
          console.log("onblur");
          setFocus(false);
        }}
      />
      <span
        style={{
          position: "relative",
          display: "block",
          height: "2px",
          width: "100%",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "lightgray",
            animationDirection: focus ? "normal" : "reverse",
          }}
        ></span>

        <span
          key={focus ? "play1" : "reverse-play1"}
          className={playing ? "middle-to-left" : ""}
          style={{
            position: "absolute",
            left: "50%",
            right: "50%",
            top: 0,
            bottom: 0,
            backgroundColor: "red",
            animationDirection: focus ? "normal" : "reverse",
          }}
        ></span>

        <span
          key={focus ? "play" : "reverse-play"}
          className={playing ? "middle-to-right" : ""}
          style={{
            transform: "rotate(180deg)",
            position: "absolute",
            left: "50%",
            right: "50%",
            top: 0,
            bottom: 0,
            backgroundColor: "red",
            animationDirection: focus ? "normal" : "reverse",
          }}
        ></span>
      </span>
    </div>
  );
};
