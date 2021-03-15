import React from "react";
import { Button, ButtonGroup, Card, CardTitle, CardText } from "reactstrap";

const DetailSubscription = () => {
  return (
    <div>
      <h2>Your Sportsman Journey Starts Now</h2>
      <h4>Choose the plan that fits you best and get started</h4>
      <ButtonGroup size="lg">
        <Button color="primary" outline>
          3 Months
        </Button>
        <Button color="primary" outline>
          6 Months
        </Button>
        <Button color="primary" outline>
          12 Months
        </Button>
      </ButtonGroup>
      <Card body className="text-center">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </Card>
    </div>
  );
};

export default DetailSubscription;
