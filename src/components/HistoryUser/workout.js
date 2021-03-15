import React, { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
// import pictbottom from "../../assets/img/feature/jogging.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getExercise } from "../../redux/Action/userAction";

const Workout = () => {
  const exercises = useSelector((state) => state.users.exercise);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercise());
  }, []);

  return (
    <>
      <div className="workout__content__bottom">
        <h2>Recent Record</h2>

        <Row justify="space-between">
          {exercises.length === 0 ? (
            <h3>You Haven't Do Exercise</h3>
          ) : (
            <>
              {exercises.map((exercise, i) => (
                <Col>
                  <Card className="card2" key={i}>
                    {exercise.created_at}
                    <CardHeader>{exercise.content}</CardHeader>
                    <CardBody>
                      <CardTitle>{exercise.video}</CardTitle>
                    </CardBody>
                    <CardFooter>{exercise.times}</CardFooter>
                  </Card>
                </Col>
              ))}
            </>
          )}
        </Row>
      </div>
      {/* </div> */}
    </>
  );
};

export default Workout;
