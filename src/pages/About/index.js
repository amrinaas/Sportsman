import React, { useEffect } from "react";
import Navbar from "../../components/Navbar1";
import pictbottom from "../../assets/img/about/bottom.jpg";
import globe from "../../assets/img/about/globe.png";
import tech from "../../assets/img/about/tech.png";
import trophy from "../../assets/img/about/trophy.png";
import happy from "../../assets/img/about/happy.png";
import check from "../../assets/img/about/check.png";

const About = () => {
  useEffect(() => {
    document.title = `About Us`;
  });
  return (
    <div className="body-about">
      <Navbar />
      <div className="about">
        <div className="about__content" style={{ marginTop: "100px" }}>
          <div className="about__content__wrapper">
            <div className="about__content__wrapper__up">
              <img src={check} alt="about" />
              <h1>WHY CHOOSE US</h1>

              <p>
                We are the best in our field and we will keep improving our
                skills and capabilities to satisfy the customers like you. There
                is no hesitation to join with us. Regret always comes to the
                end.
              </p>
            </div>
            <div className="about__content__wrapper__down">
              <div className="about__content__wrapper__down__1">
                <img src={globe} alt="" />
                <h3>The Best in Indonesia</h3>
                <p>
                  We are the best in our field and we will keep improving our
                  skills and capabilities to satisfy the customers like you
                </p>
              </div>
              <div className="about__content__wrapper__down__2">
                <img src={trophy} alt="" />
                <h3>Qualified Instructors</h3>
                <p>
                  We are the best in our field and we will keep improving our
                  skills and capabilities to satisfy the customers like you
                </p>
              </div>
              <div className="about__content__wrapper__down__3">
                <img src={tech} alt="" />
                <h3>High Tech Gym</h3>
                <p>
                  We are the best in our field and we will keep improving our
                  skills and capabilities to satisfy the customers like you
                </p>
              </div>
              <div className="about__content__wrapper__down__4">
                <img src={happy} alt="" />
                <h3>Happy Members</h3>
                <p>
                  We are the best in our field and we will keep improving our
                  skills and capabilities to satisfy the customers like you
                </p>
              </div>
            </div>
          </div>
          <div className="about__content__bottom">
            <div className="about__content__bottom__text">
              <h3>ABOUT OUR GYM</h3>
              <p>
                A gymnasium, also known as a gym, is a covered location for
                athletics. The word is derived from the ancient Greek gymnasium.
                They are commonly found in athletic and fitness centers, and as
                activity and learning spaces in educational institutions. "Gym"
                is also slang for "fitness center", which is often an area for
                indoor recreation. A gym may be open air as well. A gym is a
                place with a number of equipments and machines used by the
                people to do exercises.
              </p>
              <p>
                A gymnasium, also known as a gym, is a covered location for
                athletics. The word is derived from the ancient Greek gymnasium.
                They are commonly found in athletic and fitness centers, and as
                activity and learning spaces in educational institutions.
              </p>
            </div>
            <div className="about__content__bottom__pict">
              <img src={pictbottom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
