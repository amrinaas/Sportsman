import React from 'react';
import { Jumbotron } from 'reactstrap';

import background from "../../assets/img/jumbotron/image2.png";
import firstBody from "../../assets/img/feature/group-1.png";
import groupOne from "../../assets/img/feature/feature-1.png";
import secondBody from "../../assets/img/feature/group-2.png";
import groupTwo from "../../assets/img/feature/feature-2.png";
import thirdBody from "../../assets/img/feature/group-3.png";
import groupThree from "../../assets/img/feature/feature-3.png";
import Navbar from "../../components/Navbar1";

const Features = () => {

	return (
		<div className='feature'>
			<Jumbotron
				className='feature__background'
				style={{
					backgroundImage: `url(${background})`,
					marginBottom: `0`,
					borderRadius: `0`,
					paddingTop: `0`,
				}}>
				<Navbar />
				<h1 className='feature__text'>Measure your performance with us </h1>
				<button className='background__button'>Tracking your Record</button>
			</Jumbotron>
			<div className='first-body'>
				<img src={firstBody} alt='' />
				<img src={groupOne} alt='' className='first-body__img' />
				<div className='first-body__text'>
					<h1>Track the way you want</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere sit amet erat nec ullamcorper. Nunc luctus maximus erat a imperdiet.</p>
				</div>
			</div>
			<div className='first-body'>
				<div className='first-body__text'>
					<h1>Track the way you want</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere sit amet erat nec ullamcorper. Nunc luctus maximus erat a imperdiet.</p>
				</div>
				<img src={secondBody} alt='' className='first-body__body2' />
				<img src={groupTwo} alt='' className='first-body__img2' />
			</div>
			<div className='first-body'>
				<img src={thirdBody} alt='' />
				<img src={groupThree} alt='' className='first-body__img3' />
				<div className='first-body__text'>
					<h1>Tailored training videos</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere sit amet erat nec ullamcorper. Nunc luctus maximus erat a imperdiet.</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
