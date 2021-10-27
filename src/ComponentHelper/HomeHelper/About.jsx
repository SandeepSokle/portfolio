import "../../SCSS/HomeHelper/About.scss";
import Image from "../../Image/Home/ProfileImg.jpg";
import infoImg from "../../Image/Home/aboutImage.jpg";
import { Link } from "react-router-dom";
import moment from "moment";
export const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutHead">
        <h1>About</h1>
        <div className="aboutUnderline"></div>
      </div>
      <div className="aboutDescribe">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. At maxime alias obcaecati temporibus,
        pariatur neque. Est cupiditate eum quidem magni voluptatum consequuntur
        impedit facilis veritatis iusto atque iste illum unde tempore similique
        vitae dolorem, et beatae voluptates molestias totam aut animi? Libero
        quasi natus ullam dicta voluptate tempora, eveniet optio.
      </div>
      <div className="aboutInformation row">
        <div className="aboutInfoImg col-3 ms-4">
          <img src={infoImg} class="img-fluid mt-1" alt="Image" />
        </div>
        <div className="aboutInfoDescribe col-8 ms-4">
          <div className="describeHead">
            <h2>Frontend and UI Developer</h2>
          </div>
          <div className="describeDes">
            Building smarter applications for smart users
          </div>
          <div className="aboutPersonalInfo">
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Birthday : <span>08, April 1997</span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Age :{" "}
                <span>{`${moment().diff("1997-04-08", "years")} Year`}</span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Blog :{" "}
                <span
                  className="link"
                  onClick={() => {
                    window.location.href =
                      "https://primeprogrammingworld.blogspot.com/";
                  }}
                >
                  primeprogrammingworld
                </span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Degree : <span>Master</span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Phone : <span>+91 9729928387</span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                City : <span>Jind, Haryana, India</span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Freelance : <span>{`Available`}</span>
              </h5>
            </div>
            <div className="personalInfo">
              <span class="material-icons">navigate_next</span>
              <h5>
                Email : <span>sandeepsokle12@gmail.com</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="aboutBottomDes mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          tenetur id laboriosam dicta! Cupiditate voluptatem aliquam tempora,
          cum, mollitia quia reprehenderit vitae ipsa molestias repellat quasi
          consectetur maiores quisquam delectus saepe. Harum ullam dolore
          voluptate repellendus atque, mollitia hic sequi ipsa cupiditate sit ea
          illo quod labore illum, provident reprehenderit possimus nam natus
          placeat. Asperiores temporibus incidunt autem fugiat similique porro
          maiores harum voluptatem repellat odio officiis, maxime enim facilis
          quos vitae quasi illo, suscipit cumque facere magni eos nam
          voluptates! Unde aperiam nihil commodi, ratione quae reiciendis eaque
          sint quaerat necessitatibus itaque atque cumque illum aliquid illo
          soluta assumenda?
        </div>
      </div>
    </div>
  );
};
