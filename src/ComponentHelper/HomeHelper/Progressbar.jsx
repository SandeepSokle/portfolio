import "../../SCSS/HomeHelper/Progressbar.scss";
import { useState, useEffect } from "react";

export const Progressbar = () => {
  let [progress, setProgress] = useState(0);

useEffect(() => {
    console.log("rendered");
    if(progress === 10){
       let ele = document.querySelector(".frontCurve");
       ele.style.display = "block";
       ele.style.width = "2rem";
    }
    else if(progress>10) {
        let ele = document.querySelector(".frontCurve");
        ele.style.display = "block";
        ele.style.width = "2rem";
        let p = document.querySelector(".progressbar");
        p.style.display="block";
        p.style.width = `${progress}%`;
    }
    
}, [progress]);
useEffect(()=>{
    console.log(progress);
   let id = setInterval(()=> {
        let p = progress;
        setProgress((p+1)%100);
    },1000)
    return ()=>{
        clearInterval(id);
    }
});
  // setInterval(() => {
  //   setProgress((progress + 1) % 100);
  // }, 200);
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progressContainer">
      <div className="frontCurve"></div>
      <div className="progressbar" ></div>
      <div className="endCurve"></div>
    </div>
  );
};
