import "../../SCSS/HomeHelper/Progressbar.scss";
import { useState, useEffect } from "react";

export const Progressbar = () => {
  let [htmlVal, setHtml] = useState(75);
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(progress);
    if (progress < htmlVal) {
      let id = setTimeout(() => {
        setProgress((progress + 1) % 100);
      }, 40);
    }
  });

  const progressStyle = {
    width: `${progress}%`,
  };

  const showPercentStyle = {
    // right: `${progress < 10 ? "-10px" : "8px"}`,
    // color: `${progress < 10 ? "black" : "white"}`
  };

  console.log();

  return (
    <div className="progressContainer">
      <div className="progressbar" style={progressStyle}>
        <div className="showPercent" style={showPercentStyle}>
          {progress}%
        </div>
      </div>
    </div>
  );
};
