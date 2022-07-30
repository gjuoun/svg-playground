import React, { useEffect } from "react";
import { addSyntheticLeadingComment } from "typescript";
import "./App.css";

const MaterialCircla = () => {
  return (
    <div className="rotate">
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

const ControledCircularProgress = () => {
  const circumference = 2 * Math.PI * 20.5;

  const [progress, setProgress] = React.useState(0);
  console.log(progress);

  useEffect(() => {
    setInterval(() => {
      // console.log("hey");
      setProgress((prev) => {
        return parseFloat((prev + 0.1).toFixed(1));
      });
    }, 1000);
  }, []);

  return (
    <div>
      <div
        style={{
          position: "relative",
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
              transition: "all 1s ease-in-out",
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
            fontSize: "8rem",
          }}
        >
          {progress * 100} %
        </div>
      </div>

      <button
        onClick={() => {
          if (progress < 1) {
            setProgress(parseFloat((progress + 0.1).toFixed(1)));
          }
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (progress >= 0) {
            setProgress(parseFloat((progress - 0.1).toFixed(1)));
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export const App = () => {
  return (
    <div style={{ color: "green" }}>
      <MaterialCircla />

      <ControledCircularProgress />
    </div>
  );
};
