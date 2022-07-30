import React from "react";
import {
  MaterialCircla,
  ControledCircularProgress,
} from "./Component/CircularProgress";
import { LineProgress } from "./Component/LineProgress";
import "./App.css";

export const App = () => {
  return (
    <div style={{ color: "green" }}>
      <div style={{ width: 40, height: 40, marginBottom: 30 }}>
        <MaterialCircla />
      </div>
      <div style={{ width: 50, height: 50 }}>
        <ControledCircularProgress />
      </div>

      <div>
        <LineProgress />
      </div>
    </div>
  );
};
