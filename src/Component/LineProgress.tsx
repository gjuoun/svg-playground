import React, { useEffect, useState } from "react";
import "./LineProgress.css";

export const LineProgress = () => {
  return (
    <div style={{ width: "100%", height: "3px" }}>
      <svg viewBox="0 0 100 1">
        {/* <line
          className="material-linear"
          x1={0}
          y1={0}
          x2={100}
          y2={0}
          stroke="currentColor"
          strokeWidth={1}
        /> */}
        <line
          className="material-linear-delay"
          x1={0}
          y1={0}
          x2={100}
          y2={0}
          stroke="currentColor"
          strokeWidth={1}
        />
      </svg>

      <span style={{ height: "4px", display: "block", position: "relative" }}>
        <span
          className="material-span"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "blue",
            transition: "transform 0.2s linear",
            width: "autos",
          }}
        ></span>
      </span>

      <svg viewBox="0 0 100 2">
          <line
            className="draw-line"
            x1={0}
            y1={0}
            x2={100}
            y2={0}
            stroke={"currentColor"}
            strokeDasharray={100}
            strokeDashoffset={100}
          />
        </svg>
    </div>
  );
};
