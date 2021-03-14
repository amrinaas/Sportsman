import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import logo from "../../assets/img/logo/orange.png";
import img from "../../assets/img/anonymous.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserData } from "../../redux/Action/userAction";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggles = () => setIsOpen(!isOpen);

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

  const handleFavorite = () => {
    history.push("/bookmark");
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

  return (
    <Headroom>
      <header className={`header ${scrollY > 230 ? "layout--orange" : ""}`}>
        <Navbar dark expand="md">
          <NavbarBrand>
            <img
              src={logo}
              onClick={handleHome}
              alt=""
              className="layout__img"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggles} />
          <Collapse
            isOpen={isOpen}
            navbar
            style={{ justifyContent: "flex-end" }}
          >
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink onClick={handleFeature}>
                  <span className="nav-span">Feature</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleAbout}>
                  <span className="nav-span">About</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleContactUs}>
                  <span className="nav-span">Contact Us</span>
                </NavLink>
              </NavItem>

              {userProfile === null ? (
                ""
              ) : userProfile.roles === "admin" ? (
                <NavLink onClick={() => history.push("/admin-dashboard")}>
                  <span className="nav-span">Admin Page</span>
                </NavLink>
              ) : (
                ""
              )}
            </Nav>
            <NavItem>
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
                      {userProfile && userProfile.images !== "0" ? (
                        <img
                          src={userProfile.images}
                          alt="upload"
                          className="image-navbar"
                        ></img>
                      ) : (
                        <img
                          src={img}
                          alt="upload"
                          className="image-navbar"
                        ></img>
                      )}
                      {/* <span>{userProfile && userProfile.name}</span> */}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {/* <DropdownItem header>Header</DropdownItem> */}
                      <DropdownItem onClick={handleProfile}>
                        Profile
                      </DropdownItem>
                      <DropdownItem onClick={handleHistory}>
                        History Workout
                      </DropdownItem>
                      <DropdownItem onClick={() => history.push("/bookmark")}>
                        Favorite Workout
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={handleSignOut}>
                        Sign Out
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              ) : (
                <button onClick={handleSignIn} className="layout__button">
                  Login
                </button>
              )}
            </NavItem>
          </Collapse>
        </Navbar>
      </header>
    </Headroom>
  );
};

export default Navbars;
