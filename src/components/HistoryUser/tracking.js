import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
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
			<MapContainer center={currentLocation} zoom={zoom}>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
			</MapContainer>
        </>
    )
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(Tracking);