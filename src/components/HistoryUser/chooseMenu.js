import React, { useState, useEffect } from "react";
import ListBtn from "./index";
import { Container, Button } from "reactstrap";

const ListMenu = () => {
  useEffect(() => {
    document.title = "History Workout";
  });
  const [btnActive, setBtnActive] = useState({
    tracking: false,
    workout: true,
  });

  const [num, setNum] = useState(1);

  const trackbtn = () => {
    setBtnActive({
      tracking: true,
      workout: false,
    });
    setNum(2);
  };

  const workbtn = () => {
    setBtnActive({
      tracking: false,
      workout: true,
    });
    setNum(1);
  };

  return (
    <>
      <div>
        <Container>
          <Button
            color="danger"
            onClick={trackbtn}
            className={
              btnActive.overview
                ? "mr-2 mb-2 rounded-pill button--inactive"
                : "mr-2 mb-2 rounded-pill button--active"
            }
          >
            Tracking
          </Button>

          <Button
            color="danger"
            onClick={workbtn}
            className={
              btnActive.casts
                ? "mr-2 mb-2 rounded-pill button--inactive"
                : "mr-2 mb-2 rounded-pill button--active"
            }
          >
            Workout
          </Button>
        </Container>
      </div>
      <ListBtn change={num} />
    </>
  );
};

export default ListMenu;
