import React, { useEffect } from "react";
import Tracking from "./tracking";
import Workout from "./workout";

export default function ListBtn(props) {
  switch (props.change) {
    case 2:
      return <Tracking />;
    default:
      return <Workout />;
  }
}
