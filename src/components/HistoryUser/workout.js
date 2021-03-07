import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardFooter, CardText } from 'reactstrap';
import pictbottom from '../../assets/img/feature/jogging.jpg';

const Workout = () => {
	
    return (
        <>
		<Container>
		<div className="workout__content__bottom">
          <div className="workout__content__bottom__text">
            <h3>Recent Record</h3>
           
			<Row xs="3">
        		<Col>03 Mar 2021</Col>
        		<Col>01 Mar 2021</Col>
        		<Col>27 Feb 2021</Col>

			<Card color="secondary">
        		<CardHeader>Senam Poco-poco</CardHeader>
        		<CardBody>
          			<CardTitle tag="h5">Special Title Treatment</CardTitle>
          			<CardText>content.</CardText>
        		</CardBody>
        		<CardFooter>00.30:40</CardFooter>
			</Card>
			<Card color="secondary">
        		<CardHeader>Push-Up</CardHeader>
        		<CardBody>
          			<CardTitle tag="h5">Special Title Treatment</CardTitle>
          			<CardText>content.</CardText>
        		</CardBody>
        		<CardFooter>00.08:06</CardFooter>
			</Card>
			<Card color="secondary" >
        		<CardHeader>Senam Aerobic</CardHeader>
        		<CardBody>
          			<CardTitle tag="h5">Special Title Treatment</CardTitle>
          			<CardText>content.</CardText>
        		</CardBody>
        		<CardFooter>00.17:35</CardFooter>
			</Card>
      		</Row>

          </div>		 
        </div>
		</Container>
        </>
    )
}

export default Workout;