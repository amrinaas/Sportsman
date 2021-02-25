import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Navbar from '../Navbar1';
import background from '../../assets/img/jumbotron/jumbotron-nav.png';
// import Navbar from "../Navbar";
// import background from "../../assets/jumbotron-nav.png";
import { useHistory } from 'react-router-dom';

function JumbotronUp() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/content-video');
	};

	return (
		<div>
			<Jumbotron
				className='background'
				style={{
					backgroundImage: `url(${background})`,
					marginBottom: `0`,
					borderRadius: `0`,
					paddingTop: `0`,
				}}>
				<Navbar />
				<h1 className='background__text'>Track every aspect of your workouts. </h1>
				<button className='background__button' onClick={handleClick}>
					Ready to Sweat
				</button>
			</Jumbotron>

			<div>
				<Jumbotron
					style={{
						backgroundColor: `rgba(54, 54, 54, 1)`,
						marginBottom: `0`,
						borderRadius: `0`,
					}}>
					<Container className='body__text'>
						<h1>It all starts with the best tracking</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere sit amet erat nec ullamcorper. Nunc luctus maximus erat a imperdiet.</p>
					</Container>
				</Jumbotron>
			</div>
		</div>
	);
}

export default JumbotronUp;
