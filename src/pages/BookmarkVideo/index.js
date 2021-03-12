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
    // window.location.reload(true)
    dispatch(getBookmarkVideo(token));
  };
  useEffect(() => {
    if (message.status === 200) {
      NotificationManager.success(message.data.message, "", 3000);
    }
  }, [message]);

  console.log("this is bookmarks", bookmarks);
  console.log("this is message", message);
  return (
    <div className="bookmark">
      <div>
        <Navbar />
      </div>

      <div className="bookmark__head">
        <div className="bookmark__head__text">
          <h1>These are the collection of your favorite videos</h1>
          <h2>Start Your Workout</h2>
        </div>
        {bookmarks.length === 0 ? (
          <>
            <h3>Your collection is empty </h3>
          </>
        ) : (
          <div className="bookmark__head__container">
            {bookmarks.map((bookmark, i) => (
              <div key={i} className="bookmark__head__container__video">
                <div
                  className="bookmark__head__container__video__title"
                  onClick={() =>
                    history.push(`/videos-content/${bookmark.content_id}`)
                  }
                >
                  <h5>{bookmark.tittle}</h5>
                </div>
                <div className="bookmark__head__container__video__button">
                  {/* <button 
                    className="btn btn-danger"
                    onClick={()=> handleDeleteBookmark({id:bookmark._id})
                    // onClick={()=> console.log("ini_id:", {id:bookmark._id})
                  }
                  >
                    Delete
                  </button> */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteBookmark(bookmark._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NotificationContainer />
    </div>
  );
}
