import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const VideoContent = () => {
  const { id } = useParams();
  let [count, setCount] = useState(5);

  const maxCount = 0;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count -= 1));
      if (count === maxCount) {
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  const onReady = (e) => {
    console.log("e target =>", e.target);
    e.target.pauseVideo();
    setTimeout(function () {
      e.target.playVideo();
    }, 5000);
    setInterval(() => {
      console.log("Pause Video");
      e.target.pauseVideo();
      setInterval(() => {
        console.log("Play Video");
        e.target.playVideo();
      }, 11000);
      if (e.target.currentTime === e.target.getDuration()) {
        clearInterval();
      }
    }, 16000);
  };

  return (
    <>
      <div class="video-content-container">
        <div class="video-container">
          <YouTube videoId={id} opts={opts} onReady={onReady} />
          {/* <h4>{count === 0 ? "START" : count}</h4> */}
          <CountdownCircleTimer
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
          </CountdownCircleTimer>
        </div>
        <div class="content-sidebar">This is Sidebar</div>
      </div>
    </>
  );
};

export default VideoContent;
