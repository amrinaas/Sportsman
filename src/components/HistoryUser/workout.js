import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
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

  console.log("EXERCISE =>", exercises);

  return (
    <>
      <Container>
        <div className="workout__content__bottom">
          <div className="workout__content__bottom__text">
            <h3>Recent Record</h3>

            <Row xs="3">
              {exercises.length === 0 ? (
                <h3>Loading...</h3>
              ) : (
                <>
                  {exercises.map((exercise, i) => (
                    <Card color="secondary" key={i}>
                      {exercise.created_at}
                      <CardHeader>{exercise.content}</CardHeader>
                      <CardBody>
                        <CardTitle tag="h5">{exercise.video}</CardTitle>
                      </CardBody>
                      <CardFooter>{exercise.times}</CardFooter>
                    </Card>
                  ))}
                </>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Workout;
