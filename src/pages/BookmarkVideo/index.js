import React, { useEffect } from "react";
import Navbar from "../../components/Navbar2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkVideo } from "../../redux/Action/bookmarkAction";
import { deleteBookmark } from "../../redux/Action/bookmarkAction";

export default function BookmarkVideo() {
  useEffect(() => {
    document.title = `Bookmark`;
  });
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmark.bookmarked);
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getBookmarkVideo(token));
  }, [dispatch, token]);

  // useEffect(() =>{
  // 	dispatch(deleteBookmark(token));
  // }, [dispatch, token])
  const handleDeleteBookmark = (id) => {
    const body = {
      content_id: id,
    };
    dispatch(deleteBookmark(token, body));
  };

  const history = useHistory();
  console.log("this is bookmarks", bookmarks);
  return (
    <div className="bookmark">
      <div>
        <Navbar />
      </div>

      <div className="bookmark__head">
        <h1>These are the collection of your favorite videos</h1>
        <h2>Start Your Workout</h2>
        {bookmarks.length === 0 ? (
          <h4>Loading...</h4>
        ) : (
          <div className="bookmark__head__container">
            {bookmarks
              .map((bookmark, i) => (
                <div key={i} className="bookmark__head__container__video">
                  <h4>{bookmark.tittle}</h4>
                  <div className="bookmark__head__container__video__play">
                    <i
                      onClick={() =>
                        history.push(`/videos-content/${bookmark.content_id}`)
                      }
                      className="fas fa-play"
                    ></i>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteBookmark(bookmark.content_id)}
                  >
                    Delete
                  </button>
                </div>
              ))
              .reverse()}
          </div>
        )}
      </div>
    </div>
  );
}
