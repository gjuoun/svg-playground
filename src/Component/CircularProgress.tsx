import React, { useEffect, useState } from "react";
import "./CircularProgress.css";

export const MaterialCircla = () => {
  return (
    // svg needs a boundary to be rendered.
    <div className="rotate" style={{ width: "100%", height: "100%" }}>
      <svg viewBox="0 0 44 44">
        <circle
          className="material-rotate"
          cx="22"
          cy="22"
          r="20.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={"2.8"}
        />
      </svg>
    </div>
  );
};

export const ControledCircularProgress = () => {
  const circumference = 2 * Math.PI * 20.5;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let status: "+" | "-" = "+";
    setInterval(() => {
      if (status === "+") {
        setProgress((prev) => {
          const newValue = parseFloat((prev + 0.1).toFixed(1));
          if (newValue >= 1) {
            status = "-";
          }
          return newValue;
        });
      } else {
        setProgress((prev) => {
          const newValue = parseFloat((prev - 0.1).toFixed(1));
          if (newValue <= 0) {
            status = "+";
          }
          return newValue;
        });
      }
    }, 1000);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        viewBox="0 0 44 44"
        style={{
          transform: `rotate(-90deg)`,
        }}
      >
        <circle
          cx="22"
          cy="22"
          r="20.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={"2.8"}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - circumference * progress}
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {progress * 100}%
      </div>
    </div>
  );
};
