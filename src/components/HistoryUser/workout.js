import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pictbottom from '../../assets/img/feature/jogging.jpg';

const Workout = () => {
	
    return (
        <>
		<Container>
		<div className="workout__content__bottom">
          <div className="workout__content__bottom__text">
            <h3>Recent Record</h3>
           
			<Row xs="3">
        		<Col>00.30:40</Col>
        		<Col>7.2 KM</Col>
        		<Col>03 Mar 2021</Col>
      		</Row>

			  <Row xs="3">
        		<Col>00.05:20</Col>
        		<Col>1.2 KM</Col>
        		<Col>02 Mar 2021</Col>
      		</Row>

			  <Row xs="3">
        		<Col>00.40:09</Col>
        		<Col>5.6 KM</Col>
        		<Col>15 Feb 2021</Col>
      		</Row>
			
			  <Row xs="3">
        		<Col>00.20:10</Col>
        		<Col>4.4 KM</Col>
        		<Col>12 Feb 2021</Col>
      		</Row>

          </div>
		  <div className="workrout__content__bottom__pict">
            <img src={pictbottom} />
          </div>
        </div>
		</Container>
        </>
    )
}

export default Workout;