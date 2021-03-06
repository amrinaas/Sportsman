import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import "../../assets/css/footer-jumbotron.css";
import Navbar from "../../components/Navbar1";
import { useDispatch, useSelector } from "react-redux";
// import playButton from "../../assets/img/button/play-button.png";
import testImg from "../../assets/img/jumbotron/aa.jpg";

import { getContent } from "../../redux/Action/contentAction";

const Content = () => {
  useEffect(() => {
    document.title = `Content`;
  });

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  // const [scrollY, setScrollY] = useState(0);
  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content.content);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getContent(token));
  }, [dispatch, token]);

  const history = useHistory();

  // console.log(scrollY);
  console.log("ini content", contents);
  return (
    <>
      <div className="content-jumbotron">
        <Navbar />
        <div className="content-jumbotron-i">
          <h1>Live Healthy With Us !</h1>
          <button className="btn-flip-down">Start Workout</button>
        </div>
      </div>
      <div className="writer-content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          consequatur similique saepe error odit deserunt adipisci repellat
          molestiae, quos eveniet magnam neque. Facere inventore excepturi eos
          aliquam maxime esse molestiae ut libero harum, amet corporis. Possimus
          commodi doloribus nostrum distinctio eligendi, iure quisquam
          consectetur molestias ex temporibus corporis assumenda, doloremque
          consequatur aperiam natus delectus recusandae, placeat neque beatae
          reiciendis iste minus porro. modi architecto accusantium tenetur nisi
          consectetur facilis rerum earum.
        </p>
      </div>
      <div className="jumbotron-tips">
        <div className="container-tips">
          <div className="tips-one">
            <h4>HEALTH ASSESSMENT & FITNESS TESTING</h4>
            <p>
              Before you can start a training and nutritional plan Here is what
              I will aim to find out about you :
            </p>
            <ol>
              <li>- Resting Heart Rate</li>
              <li>- Resting Blood Pressure</li>
              <li>- Height/Weight</li>
              <li>- Visceral Fat</li>
              <li>- BMR (Basic Metabolic Rate)</li>
              <li>- Cardiorespiratory fitness</li>
              <li>- Cardiorespiratory recovery rate</li>
              <li>- Muscular Strength</li>
              <li>- Flexibility</li>
              <li>- Posture</li>
              <li>- Muscular Endurance</li>
            </ol>
          </div>
          <div className="tips-two">
            <h4>NUTRITIONAL ANALYSIS & PLAN</h4>
            <p>
              Honestly - 70% of losing weight comes down to your nutrition. If
              you are not following a suitable nutritional system, or worse
              still are on a fad diet, then it doesn't matter how hard you train
              in the gym, you will not get the long lasting results you're
              looking for. I will give you individual nutritional guidance which
              :
            </p>
            <ol>
              <li>
                - Doesn't require you to starve yourself or cut out carbs like a
                lot of diets, causing your metabolism to slow right down and
                make you feel tired and hungry all day long.
              </li>
              <li>
                - Doesn't require eating broccoli all day - You'll still be able
                to have the foods you enjoy.
              </li>
              <li>
                - Doesn't require you to count calories or weigh your food.
              </li>
            </ol>
          </div>
          <div className="tips-three">
            <h4>FOOD SHOPPING COACHING</h4>
            <p>
              If you're going to start a lifestyle of healthy nutrition you need
              to know what foods to buy. Do you know what you should be looking
              for in the supermarket? If you're going to buy a yoghurt for
              example, can you identify which the healthiest choice is? Do you
              understand the nutritional labels and ingredients on the foods
              you're buying to enable you to confidently identify whether an
              item packaged as 'healthy' truly is or not? How do you avoid the
              temptations of buying junk food? You need to be confident with
              these things and making sure you're filling your fridge and
              cupboards with the right stuff.
            </p>
          </div>
        </div>
      </div>

      <div className="content-container" id="workout">
        <h2>Start Your Workout</h2>
        {contents.length === 0 ? (
          <h4>Loading...</h4>
        ) : (
          <>
            {contents
              .map((content, i) => (
                <div key={i} className="content-card">
                  <img className="content-img" src={content.image} alt="test" />

                  <div className="content-description">
                    <h4>{content.title}</h4>
                    <p>{content.description}</p>
                  </div>

                  <div
                    className="start-button"
                    onClick={() =>
                      history.push(`/videos-content/${content._id}`)
                    }
                  >
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              ))
              .reverse()}
          </>
        )}
      </div>

      {/* <div className="container-video">
        {contents.map((content, i) => (
          <div
            className="card-video"
            onClick={() => history.push(`/videos-content/${content.url}`)}
            key={i}
          >
            <img
              src={`http://img.youtube.com/vi/${content.url}/0.jpg`}
              alt=""
              className="thumbnail-video"
            />
            <div className="rect-video"></div>
            <p>{content.title}</p>
            <img src={playButton} alt="" className="play-button" />
          </div>
        ))}
      </div> */}

      {/* <div class="container-video">
        {data.result.map((video, i) => (
          <div
            class="card-video"
            onClick={() => history.push(`/videos-content/${video.url}`)}
            key={i}
          >
            <img
              src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
              alt=""
              className="thumbnail-video"
            />
            <div className="rect-video"></div>
            <p>{video.title}</p>
            <img src={playButton} alt="" className="play-button" />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Content;
