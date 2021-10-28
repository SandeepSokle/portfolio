import "../../SCSS/HomeHelper/Progressbar.scss";



export const Progressbar = ()=>{


    const progressStyle = {
        color: "blue",
        width: "70%",
        Height : "100%",
        
    };
    const progressContainerStyle = {
        color: "white",
        outerHeight : "4rem",
        width: "100%",
        border  : "2px solid black"
      };


    return <div className="progressContainer" style = {progressContainerStyle}>
        <div className="progressbar" style = {progressStyle}></div>
    </div>
}