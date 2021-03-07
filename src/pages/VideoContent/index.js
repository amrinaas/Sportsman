import React, { useEffect, useState } from "react";
import { getContentById } from "../../redux/Action/contentAction";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar1";
// import { postFavorite } from "../../redux/Action/userAction";
import { bookmarkVideo } from "../../redux/Action/bookmarkAction";
import Video from "../Videos";

const VideoContent = () => {
  useEffect(() => {
    document.title = "Content Video";
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.content.video);
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

  console.log("ini video =>", videos);

  return (
    <>
      <Video content={videos.video} />
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
              className="bookmark"
              onClick={() => handleBookmark(videos.title, videos._id)}
            >
              Bookmark Video
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
                    <h6 onClick={() => history.push(`video/${video.videoUrl}`)}>
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
    </>
  );
};

export default VideoContent;
