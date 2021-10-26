import Image from "../Image/LeftNav/profileImg.jpg";
import blog from "../Image/LeftNav/blogger.png";
import google from "../Image/LeftNav/google.png";
import leetcode from "../Image/LeftNav/leetcode.png";
import linkedin from "../Image/LeftNav/linkedin.png";
import twitter from "../Image/LeftNav/twitter.png";
import "../SCSS/LeftNav.scss";
import "material-icons/iconfont/material-icons.scss";
export const LeftNav = () => {
  return (
    <div className="leftinnerContainer p-3">
      <div className="profileImg">
        <img src={Image} class="img-fluid" alt="Profile" />
      </div>
      <div className="profileName mb-2">
        <h3>Sandeep Sokle</h3>
      </div>
      <div className="socialLinkes mb-4">
        <div className="mediaLink">
          <img src={linkedin} class="img-fluid" alt="Profile" />
        </div>
        <div className="mediaLink">
          <img src={google} class="img-fluid" alt="Profile" />
        </div>
        <div className="mediaLink">
          <img src={twitter} class="img-fluid" alt="Profile" />
        </div>
        <div className="mediaLink">
          <img src={leetcode} class="img-fluid" alt="Profile" />
        </div>
        <div className="mediaLink">
          <img src={blog} class="img-fluid" alt="Profile" />
        </div>
      </div>

      <div className="navList mb-5">
        <ul>
          <li className="navTab">
            <span class="material-icons me-2">home</span> Home
          </li>
          <li className="navTab">
            <span class="material-icons me-2">info</span> About
          </li>
          <li className="navTab">
            <span class="material-icons me-2">description</span> Resume
          </li>
          <li className="navTab">
            <span class="material-icons me-2">style</span> Portfolio
          </li>
          <li className="navTab">
            <span class="material-icons me-2">contact_mail</span>Contacts
          </li>
        </ul>
      </div>
      <div className="copyRights">
        <p className = "copyRightContant">
          <span className="material-icons">copyright</span> 2021. All Rights
          Reserved By Sandeep Sokle
        </p>
      </div>
    </div>
  );
};
