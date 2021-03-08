import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo/orange.png";
import img from "../../assets/img/anonymous.jpg";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Headroom from "react-headroom";
import _ from "lodash";
import { getUserData } from "../../redux/Action/userAction";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const userProfile = useSelector((state) => state.users.userProfile);
  const dispatch = useDispatch();

  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const history = useHistory();
  const image = useSelector((state) => state.users.uploadImg);

  const page = window.location.pathname.substring(1);
  console.log(page);

  const handleHome = () => {
    history.push("/");
  };

  const handleSignIn = () => {
    history.push("/login");
  };

  const handleFeature = () => {
    history.push("/feature");
  };

  const handleAbout = () => {
    history.push("/about");
  };

  const handleContactUs = () => {
    history.push("/contactus");
  };

  const handleProfile = () => {
    history.push("/profile");
    window.location.reload(true);
  };

  const handleHistory = () => {
    history.push("/history");
    window.location.reload(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload(true);
  };

  useEffect((res) => {
    dispatch(getUserData());
    console.log("ini userProfile", userProfile);
    if (userProfile && userProfile.status === 200) {
      localStorage.setItem("token", res.data.data);
    }
  }, []);

  console.log("INI", userProfile);
  return (
    <Headroom>
      <header className={`header ${scrollY > 230 ? "layout--orange" : ""}`}>
        <img src={logo} onClick={handleHome} alt="" className="layout__img" />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li onClick={handleFeature}>Feature</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleContactUs}>Contact Us</li>
          {userProfile === null ? (
            ""
          ) : userProfile.roles === "admin" ? (
            <li onClick={() => history.push("/admin-dashboard")}>Admin Page</li>
          ) : (
            ""
          )}
          {userProfile ? (
            <div>
              <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                style={{ marginTop: "5px" }}
              >
                <DropdownToggle
                  caret
                  style={{
                    fontWeight: "500",
                    backgroundColor: "RGBA(255,255,255,0)",
                    border: "none",
                  }}
                >
                  <img
                    className="image-navbar"
                    src={
                      userProfile && userProfile.images
                        ? userProfile.images
                        : img
                    }
                    alt=""
                  />
                  {/* <span>{userProfile && userProfile.name}</span> */}
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem header>Header</DropdownItem> */}
                  <DropdownItem onClick={handleProfile}>Profile</DropdownItem>
                  <DropdownItem onClick={handleHistory}>
                    History Workout
                  </DropdownItem>
                  <DropdownItem>Favorite Workout</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          ) : (
            <button onClick={handleSignIn} className="layout__button">
              Login
            </button>
          )}
        </ul>
      </header>
    </Headroom>
  );
};

export default Navbar;
