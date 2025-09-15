import "./Map.css";
import {MapContainer,TileLayer,Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];


export default function Map(){
    return(
        <div className="map-container-wrapper">
            <MapContainer center={[18.344944, 73.196667]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {markers.map((marker) => (
                <Marker position={marker.geocode}>
                    {/* <Popup>{marker.popUp}</Popup> */}
                </Marker>
                ))}               
            </MapContainer>
        </div>
    );
}