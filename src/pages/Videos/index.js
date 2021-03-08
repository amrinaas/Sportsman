import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Navbar from "../../components/Navbar2";
import { useDispatch, useSelector } from "react-redux";
import { postExercise } from "../../redux/Action/userAction";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Videos = (props) => {
  // const { id } = useParams();
  // let [count, setCount] = useState(5);

  // const maxCount = 0;

  useEffect(() => {
    document.title = "Video";
  }, []);

  const [disable, setDisable] = useState(true);
  const [videoTitle, setVideoTitle] = useState("");

  const opts = {
    height: "500",
    width: "1024",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (e) => {
    // console.log("video => ", e.target.playerInfo.videoData.title);
    setVideoTitle(e.target.playerInfo.videoData.title);
    e.target.playVideo();
    setTimeout(function () {
      setDisable(false);
    }, e.target.getDuration() * 1000);
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const { title } = props.location;
  const message = useSelector((state) => state.users.message);

  // timer
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  let updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };
  // const history = updateM * 60 + updateS;

  const handleClickStart = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };

  const handleClickStop = () => {
    const body = {
      content: title,
      video: videoTitle,
      time: `${updateH}:${updateM}:${updateS}`,
      // time: "tes",
    };
    clearInterval(interv);
    dispatch(postExercise(body));
  };

  useEffect(() => {
    if (message.status === 200) {
      NotificationManager.success(message.data.message);
    }
  }, [message]);

  console.log("message =>", message);
  // console.log("props =>", title);
  // console.log("Video Title =>", videoTitle);

  return (
    <>
      <Navbar />
      <div className="video-container">
        <YouTube videoId={`${id}`} opts={opts} onReady={onReady} />
      </div>
      <div className="timer-workout">
        <div className="video-timer">
          <span>{time.h >= 10 ? time.h : "0" + time.h}</span>&nbsp;&nbsp;
        </div>
        <div className="video-timer">
          <span>{time.m >= 10 ? time.m : "0" + time.m}</span>&nbsp;&nbsp;
        </div>
        <div className="video-timer">
          <span>{time.s >= 10 ? time.s : "0" + time.s}</span>&nbsp;&nbsp;
        </div>
        <div className="video-timer">
          <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>&nbsp;&nbsp;
        </div>
        {status === 0 ? (
          <button
            disabled={disable}
            className={!disable ? "video-enable" : "video-disable"}
            onClick={handleClickStart}
          >
            Start
          </button>
        ) : (
          <button className="video-enable" onClick={handleClickStop}>
            Stop
          </button>
        )}
        <NotificationContainer />
      </div>

      {/* <h4>{count === 0 ? "START" : count}</h4> */}
      {/* <CountdownCircleTimer
            isPlaying
            duration={5}
            colors={[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
          >
            {({ remainingTime }) =>
              remainingTime === 0 ? (
                "Start"
              ) : (
                <div className="timer">{remainingTime}</div>
              )
            }
          </CountdownCircleTimer> */}
    </>
  );
};

export default Videos;
