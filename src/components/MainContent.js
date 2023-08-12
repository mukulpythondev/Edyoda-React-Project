import React from "react";
import "./styles.css";
import PackagePanel from "./PackagePanel";
import icon1 from "./scholarship.svg";
import icon2 from "./time.svg";
import icon3 from "./books.svg";
import icon4 from "./noads.svg";
import icon5 from "./Icon.png";
function MainContent() {
  return (
    <div className="main-content">
      <div className="left-content">
        <h2>
          Access curated courses worth <br />{" "}
          <span className="strike">
  ₹18,500
</span>&nbsp;
at just <span className="price">₹99</span> per year!</h2>

        <ul className="features-list">
          <li>
            {" "}
            <img className="feature-icon" src={icon3} alt="" />{" "}
            <span>100+</span>&nbsp; Job relevant courses
          </li>
          <li>
            {" "}
            <img className="feature-icon" src={icon2} alt="" />{" "}
            <span>20,000+</span>&nbsp; hours of content
          </li>
          <li className="feature-list-item">
            <div className="feature-icon-container">
              <img className="feature-icon" src={icon4} alt="" />
              <h3 className="live-text">Live</h3>
            </div>
            Exclusive Webinar Access
          </li>
          <li>
            {" "}
            <img className="feature-icon" src={icon1} alt="" /> Scholarship
            worth &nbsp; <span>₹94,500</span>
          </li>
          <li>
            {" "}
            <img className="feature-icon" src={icon5} alt="" />{" "}
            <span>Ad-free</span> &nbsp; learning experience
          </li>
        </ul>
      </div>
      <PackagePanel/>
    </div>
  );
}

export default MainContent;
