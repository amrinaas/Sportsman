import React, { useEffect, useState } from "react";
import { getContentById } from "../../redux/Action/contentAction";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar1";
import { bookmarkVideo } from "../../redux/Action/bookmarkAction";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const VideoContent = () => {
  useEffect(() => {
    document.title = "Content Video";
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.content.video);
  const message = useSelector((state) => state.bookmark.message);
  const status = useSelector((state) => state.content.message);
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    dispatch(getContentById(token, id));
  }, [dispatch, token, id]);

  const handleBookmark = (title, id) => {
    if (status.status === 200) {
      window.location.reload();
    }
    const body = {
      content_id: id,
      tittle: title,
    };
    dispatch(bookmarkVideo(token, body));
  };

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

            {videos.video.map((item, i) => (
              <div key={i} className="content-video-card">
                <div className="video-card-long">
                  <img
                    src={`https://img.youtube.com/vi/${item.videoUrl}/0.jpg`}
                    alt=""
                  />
                  <p>{item.time} seconds</p>
                  <div className="button-play-video">
                    <h6
                      onClick={() =>
                        history.push({
                          pathname: `/video/${item.videoUrl}`,
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
