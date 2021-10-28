import { useState } from "react";
import "../../SCSS/HomeHelper/Skill.scss";
import { Progressbar } from "./Progressbar";

export const Skill = () => {

  return (
    <div className="skillContainer">
      <div className="aboutHead">
        <h1>Skill</h1>
        <div className="aboutUnderline"></div>
      </div>
      <div className="skillDescribe">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        exercitationem minus tenetur harum vitae commodi eveniet, assumenda
        minima, doloremque dolorum debitis dolorem nulla aliquam corrupti,
        dolore facilis esse accusamus excepturi odit magni culpa repellendus
        alias quisquam! Provident maxime incidunt magnam vitae, cumque sunt
        laborum nulla hic consequatur iure sint similique quia voluptatem
        veritatis corrupti ea autem ab quis. Aliquid quibusdam cumque quas dicta
        eum atque placeat excepturi facere, animi dolorum eaque numquam
        similique. Doloremque voluptate sapiente expedita rem dolorem earum
        officiis, dolorum, aspernatur tempore provident quis. Distinctio
        corrupti officiis quibusdam vel exercitationem pariatur repellat quia
        beatae, maxime natus consequatur enim.
      </div>


      <div className="skillReview col-6">
       <Progressbar/>
      </div>
    </div>
  );
};
