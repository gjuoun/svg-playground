import React from "react";
import {
  MaterialCircla,
  ControledCircularProgress,
} from "./Component/CircularProgress";
import { LineProgress } from "./Component/LineProgress";
import "./App.css";
import { InputUnderLines } from "./Component/InputUnderLines/InputUnderLines";

export const App = () => {
  const [value, setValue] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);

  return (
    <div style={{ color: "green" }}>
      {/* <div style={{ width: 40, height: 40, marginBottom: 30 }}>
        <MaterialCircla />
      </div>
      <div style={{ width: 50, height: 50 }}>
        <ControledCircularProgress />
      </div>*/}

      <div>{/* <LineProgress /> */}</div>

      <div>
        <InputUnderLines />
      </div>

      <div
        className="gradient"
        style={{
          width: "100%",
          height: "300px",
        }}
      ></div>

      <div
        style={{
          width: "100%",
          height: "300px",
          borderStyle: "solid",
          borderWidth: "10px",
          borderImage:
            "linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1",
        }}
      ></div>

      <div
        className="gradient-moving"
        style={{
          width: "300px",
          height: "300px",
        }}
      ></div>
      <svg
        viewBox="0 0 5 5"
        style={{
          transformOrigin: "center",
        }}
      >
        <defs>
          <linearGradient
            id="myGradient"
            // gradientTransform={`rotate(${value})`}
            gradientTransform={`rotate(120)`}
          >
            <stop offset="0.5" stopColor="purple" />
            {/* <stop offset="50%" stopColor="red" /> */}
            <stop offset="0.5" stopColor="orange" />
          </linearGradient>
        </defs>

        {/* <circle cx="5" cy="5" r="4" fill="url('#myGradient')" /> */}
        <rect width={5} height={5} fill="url('#myGradient')" />
      </svg>
      <button
        style={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          borderRadius: "5px",
        }}
        className={toggle ? "gradient-moving-fast" : ""}
      >
        <div
          style={{
            background: "white",
            margin: "5px",
            padding: "12px",
            borderRadius: "3px",
          }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Start Looking
        </div>
      </button>
    </div>
  );
};
