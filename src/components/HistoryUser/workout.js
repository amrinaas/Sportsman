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
  CardGroup,
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
        <div className="workout__content__bottom">
          <div className="workout__content__bottom__text">
            <h2>Recent Record</h2>
            
            <Row justify = "space-between">
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
                        <CardTitle >{exercise.video}</CardTitle>
                      </CardBody>
                      <CardFooter><p>{exercise.times}</p></CardFooter>
                    </Card>
                  
                  </Col>
                  ))}
                </>
              )}
            </Row>

          </div>
        </div>
    </>
  );
};

export default Workout;
