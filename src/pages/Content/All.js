import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getContent } from "../../redux/Action/contentAction";

const All = () => {
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
      <div className="content-container">
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
                  onClick={() => history.push(`/videos-content/${content._id}`)}
                >
                  <i className="fas fa-play"></i>
                </div>
              </div>
            ))
            .reverse()}
        </>
      )}
      </div>
    </>
  );
};

export default All;
