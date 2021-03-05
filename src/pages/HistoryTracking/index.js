import React, { useState } from 'react';
import Navbar from '../../components/Navbar2';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Button } from 'reactstrap';
import 'leaflet/dist/leaflet.css';
import { geolocated } from 'react-geolocated';

const Tracking = () => {
	const [currentLocation] = useState({
		lat: 52.52437, 
		lng: 13.41053, 
	});
	const [zoom] = useState(17);
    return (
        <>
			<Navbar />
			<div className='bg-container'>
				<div className='sub__side'>
				<ul>
					<li><Button color="danger" size="lg" blok>Tracking</Button></li>	
					<li><Button color="success" size="lg" blok>Workout</Button></li>		
				</ul>
				</div>
					<MapContainer center={currentLocation} zoom={zoom}>
						<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
					</MapContainer>
			</div>
	
        </>
    )
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(Tracking);