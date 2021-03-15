import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

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
      <Row>
        <Col sm="6">
          <Card body className="subscription">
            <CardTitle tag="h5">Training Coach</CardTitle>
            <CardText>
              Build muscle or burn fat with high-intensity training
            </CardText>
            <h3>$1.38</h3>
            <span>/week</span>
            <p>Billed every 3 months</p>
            <Button>Get Training Coach</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Training & Nutrition Bundle</CardTitle>
            <CardText>
              Combine Training and Nutrition Coaches to train smarter and eat
              better
            </CardText>
            <h3>$2.08</h3>
            <span>week</span>
            <p>Billed every 3 months</p>
            <Button>Get Coach Bundle</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailSubscription;
