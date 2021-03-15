import React from "react";
import jog from "./Images/jogging.jpg";
import cycling from "./Images/gowes.jpg";
import gym from "./Images/yoga.jpg";
import LeafletMap from "../../components/LeafletMap";

function information() {
  return (
    <div className="information-body">
      <div className="information">
        <div className="information__left">
          <div className="information__left__uppictcontainer">
            <img
              className="information__left__uppictcontainer__left-up-pict"
              src={cycling}
              alt=""
            />
          </div>
          <div className="information__left__downpictcontainer">
            <img
              className="information__left__downpictcontainer__left-down-pict"
              src={jog}
              alt=""
            />
          </div>
        </div>
        <div className="information__middle">
          <div className="information__middle__text">
            <h1>Various Workout Mode</h1>
            <p>
              Start training with a personal plan that guides you—while
              adjusting to your progress, schedule and other activities. With
              Sportsman, you get access to four 4–6 week training plans.
            </p>
          </div>
        </div>
        <div className="information__right">
          <div className="information__right__pictcontainer">
            <img
              className="information__right__pictcontainer__right-pict"
              src={gym}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="leafletmap">
        <LeafletMap />
      </div>
      <div className="map">
        <div className="text__container">
          <h1>Track Your Movement</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content
          </p>
        </div>
      </div>
    </div>
  );
}

export default information;
