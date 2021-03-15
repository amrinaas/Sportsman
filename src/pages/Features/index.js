import React from "react";
import { Jumbotron } from "reactstrap";

import background from "../../assets/img/jumbotron/image2.png";
import firstBody from "../../assets/img/feature/group-1.png";
import groupOne from "../../assets/img/feature/feature-1.png";
import secondBody from "../../assets/img/feature/group-2.png";
import groupTwo from "../../assets/img/feature/feature-2.png";
import thirdBody from "../../assets/img/feature/group-3.png";
import groupThree from "../../assets/img/feature/feature-3.png";
import Navbar from "../../components/Navbar1";

const Features = () => {
  return (
    <div className="feature">
      <Jumbotron
        className="feature__background"
        style={{
          backgroundImage: `url(${background})`,
          marginBottom: `0`,
          borderRadius: `0`,
          paddingTop: `0`,
        }}
      >
        <Navbar />
        <h1 className="feature__text">Measure your performance with us </h1>
        <button className="background__button">Tracking your Record</button>
      </Jumbotron>
      <div className="first-body">
        <img src={firstBody} alt="" />
        <img src={groupOne} alt="" className="first-body__img" />
        <div className="first-body__text">
          <h1>Track the way you want</h1>
          <p>
            Energise your routine with our growing library of workouts led by
            our world-class Sportsman Master Trainers. With Sportsman, you get
            access to over 190 free workouts across strength, endurance, yoga
            and mobility targeting your abs, arms, shoulders, glutes and legs.
            Sessions range from 15–45 minutes and are designed to help you see
            and feel results.
          </p>
        </div>
      </div>
      <div className="first-body">
        <div className="first-body__text2">
          <h1>Various workout mode</h1>
          <p>
            Workout Collections offer a set of recommended workouts and guidance
            from our Sportsman Master Trainers. They are a great way to discover
            new workouts, try community favourites or simply find the right
            workout for you and your daily routine. Here's a few of our
            favourites.
          </p>
        </div>
        <img src={secondBody} alt="" className="first-body__body2" />
        <img src={groupTwo} alt="" className="first-body__img2" />
      </div>
      <div className="first-body">
        <img src={thirdBody} alt="" />
        <img src={groupThree} alt="" className="first-body__img3" />
        <div className="first-body__text">
          <h1>Tailored training videos</h1>
          <p>
            Earn badges and trophies for reaching workout milestones like total
            workouts completed, workout frequency, weekly and monthly streaks,
            and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
