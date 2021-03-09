import React, { useEffect, useState } from "react";
import { getContentById } from "../../redux/Action/contentAction";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar1";
// import { postFavorite } from "../../redux/Action/userAction";
import { bookmarkVideo } from "../../redux/Action/bookmarkAction";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const VideoContent = () => {
  useEffect(() => {
    document.title = "Content Video";
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.content.video);
  const message = useSelector((state) => state.bookmark.message);
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    dispatch(getContentById(token, id));
  }, [dispatch, token, id]);

  const handleBookmark = (title, id) => {
    const body = {
      content_id: id,
      tittle: title,
    };
    dispatch(bookmarkVideo(token, body));
  };

  useEffect(() => {
    if (message.status === 200) {
      NotificationManager.success(message.data.message, "", 3000);
    }
  }, [message]);

  console.log("ini video =>", videos);
  console.log("message =>", message);

  return (
    <>
      <div className="content-video-jumbotron">
        <Navbar />
      </div>
      <div className="content-video-container">
        <h3>Your Videos Workout</h3>

        {videos.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <button
              className="btn btn-primary"
              onClick={() => handleBookmark(videos.title, videos._id)}
            >
              Bookmark Content
            </button>

            {videos.video.map((video, i) => (
              <div key={i} className="content-video-card">
                <div className="video-card-long">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoUrl}/0.jpg`}
                    alt=""
                  />
                  <p>{video.time} seconds</p>
                  <div className="button-play-video">
                    <h6
                      onClick={() =>
                        history.push({
                          pathname: `video/${video.videoUrl}`,
                          title: videos.title,
                        })
                      }
                    >
                      Play
                    </h6>
                    {/* <button
											onClick={() =>
												handleBookmark(
													video._id
												)
											}
										>
											{" "}
											Bookmark Video
										</button> */}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <NotificationContainer />
    </>
  );
};

export default VideoContent;
