import React, { useEffect } from "react";
import Navbar from "../../components/Navbar2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkVideo } from "../../redux/Action/bookmarkAction";
import { deleteBookmark } from "../../redux/Action/bookmarkAction";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export default function BookmarkVideo() {
  useEffect(() => {
    document.title = `Bookmark`;
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmark.bookmarked);
  const message = useSelector((state) => state.bookmark.message);
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getBookmarkVideo(token));
  }, [dispatch, token]);

  const handleDeleteBookmark = (id) => {
    dispatch(deleteBookmark(token, id));
    dispatch(getBookmarkVideo(token));
  };

  useEffect(() => {
    if (message.status === 200) {
      NotificationManager.success(message.data.message, "", 3000);
    }
  }, [message]);

  return (
    <div className="bookmark">
      <div>
        <Navbar />
      </div>
      <div className="bookmark__head__text">
        <h1>These are the collection of your favorite videos</h1>
        <h2>Start Your Workout</h2>
      </div>
      {bookmarks.length === 0 ? (
        <div className="bookmark__h3">
          <h3>Your collection is empty </h3>
        </div>
      ) : (
        <div className="card-master">
          <div class="cards-list">
            {bookmarks.map((bookmark, i) => (
              <div key={i} className="card-wrapper">
                <div class="card 1">
                  <div class="card_image">
                    {" "}
                    <img src={bookmark.content_id.image} />{" "}
                  </div>
                  <div class="card_title title-white">
                    <p>{bookmark.content_id.title}</p>
                  </div>
                </div>
                <div className="button-container">
                  <button
                    className="button-container__button-play"
                    onClick={() =>
                      history.push(`/videos-content/${bookmark.content_id._id}`)
                    }
                  >
                    Play
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteBookmark(bookmark._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
