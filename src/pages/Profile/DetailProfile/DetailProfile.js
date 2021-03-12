import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  uploadImage,
  putUserData,
  getUserData,
} from "../../../redux/Action/userAction";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Button } from "reactstrap";

import profile from "../../../assets/img/anonymous.jpg";

const DetailProfile = () => {
  const [imageData, setImageData] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
  });
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.users.userProfile);
  const message = useSelector((state) => state.users.message);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = () => {
    const data = new FormData();
    data.append("images", imageData);
    dispatch(uploadImage(data));
  };

  const handleuserData = () => {
    NotificationManager.info("Loading", "", 3000);
    dispatch(putUserData(userData, gender));
  };

  useEffect((res) => {
    dispatch(getUserData());
    console.log("ini userProfile", userProfile);
    if (userProfile && userProfile.status === 200) {
      localStorage.setItem("token", res.data.data);
    }
  }, []);

  useEffect(() => {
    if (message.status === 400) {
      NotificationManager.error(message.data.message, "", 3000);
    } else if (message.status === 200) {
      NotificationManager.success(message.data.message, "", 3000);
      window.location.reload(true);
    }
  }, [message]);

  const onCreate = () => {
    handleUploadImage();
    handleuserData();
  };

  return (
    <>
      <main>
        <div className="pr__wrap">
          <div className="pr__dis">
            {!imageURL ? (
              <>
                <input
                  type="file"
                  id="upload"
                  hidden
                  onChange={(event) => {
                    setImageData(event.target.files[0]);
                    setImageURL(URL.createObjectURL(event.target.files[0]));
                  }}
                />
                <label htmlFor="upload" className="profile__picture">
                  {userProfile && userProfile.images !== "0" ? (
                    <img src={userProfile.images} alt="upload"></img>
                  ) : (
                    <img src={profile} alt="upload"></img>
                  )}
                </label>
              </>
            ) : (
              <div className="profile__picture--selected">
                <img src={imageURL} alt="" />
                <button onClick={() => setImageURL(null)}>remove image</button>
              </div>
            )}
            <h3>{userProfile && userProfile.name}</h3>
          </div>
        </div>
        <div className="pr__edit">
          <tr>
            <td className="pr__label">
              <label htmlFor="">Name</label>
            </td>
            <td>
              <input
                type="text"
                onChange={(event) => {
                  handleChange(event);
                }}
                name="name"
                className="pr__input"
                placeholder="Full Name"
                value={userData !== null ? userData.name : ""}
              />
            </td>
          </tr>
          <tr>
            <td className="pr__label">
              <label htmlFor="">Gender</label>
            </td>
            <div className="pr__gender">
              <Button
                color="secondary"
                size="lg"
                block
                onClick={(e) => setGender(e.target.value)}
                name="gender"
                value="male"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "10px",
                }}
                outline={gender === "male" ? false : true}
              >
                <i class="fas fa-male"></i>
                Male
              </Button>
              <Button
                color="secondary"
                size="lg"
                block
                onClick={(e) => setGender(e.target.value)}
                name="gender"
                value="female"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "10px",
                }}
                outline={gender === "female" ? false : true}
              >
                <i class="fas fa-female"></i>
                Female
              </Button>
            </div>
          </tr>
          {/* <tr>
            <td className="pr__label">
              <label htmlFor="">Profile Picture</label>
            </td>
            <td>
              <input
                type="file"
                id="upload"
                onChange={(event) => {
                  setImageData(event.target.files[0]);
                  setImageURL(URL.createObjectURL(event.target.files[0]));
                }}
              />
            </td>
          </tr> */}
          <button onClick={onCreate} className="pr__button">
            Save
          </button>
          <NotificationContainer />
        </div>
      </main>
    </>
  );
};

export default DetailProfile;
