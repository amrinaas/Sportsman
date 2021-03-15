import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector, useDispatch } from "react-redux";
import mapIcon from "../../assets/img/button/iconmaps1.png";
import L from "leaflet";
import { getTracking } from "../../redux/Action/contentAction";

const Tracking = () => {
  const dispatch = useDispatch();
  const tracking = useSelector((state) => state.content.tracking);
  const [start, setStart] = useState([-6.17782, 106.84658]);
  const [end, setEnd] = useState([-6.173179, 106.829289]);
  const markerIconStart = new L.icon({
    iconUrl:
      "https://ghybs.github.io/leaflet-defaulticon-compatibility/built/assets/401d815dc206b8dc1b17cd0e37695975.png",
    iconAnchor: [12, 41],
    iconSize: [30, 40],
    shadowUrl:
      "https://ghybs.github.io/leaflet-defaulticon-compatibility/built/assets/44a526eed258222515aa21eaffd14a96.png",
  });
  const markerIconEnd = new L.icon({
    iconUrl: mapIcon,
    iconAnchor: [12, 41],
    iconSize: [30, 40],
    shadowUrl:
      "https://ghybs.github.io/leaflet-defaulticon-compatibility/built/assets/44a526eed258222515aa21eaffd14a96.png",
  });

  useEffect(() => {
    dispatch(getTracking());
  }, []);

  const handleClick = (start, end) => {
    setStart(start);
    setEnd(end);
  };

  return (
    <>
      <MapContainer center={start} zoom={9} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tracking.length === 0 ? (
          ""
        ) : (
          <>
            <Marker position={start} icon={markerIconStart}>
              <Popup>Start Point</Popup>
            </Marker>
            <Marker position={end} icon={markerIconEnd}>
              <Popup>End Point</Popup>
            </Marker>
          </>
        )}
      </MapContainer>

      <div className="history-tracking-data-container">
        {tracking.length === 0 ? (
          <h6>You don't have any history yet</h6>
        ) : (
          tracking.map((track, i) => (
            <div
              className="history-tracking-data"
              key={i}
              onClick={() =>
                handleClick(
                  track.startPoint.coordinates,
                  track.endPoint.coordinates
                )
              }
            >
              <p className="date-tracking">{track.createdAt}</p>
              <p>Distance : {track.distance} km</p>
              <p>Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {track.time} m</p>
              <p>Speed &nbsp;&nbsp;&nbsp;&nbsp;: {track.speed}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Tracking;
