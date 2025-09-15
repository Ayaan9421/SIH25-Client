import "./Map.css";
import { MapContainer, TileLayer, Marker, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer, Overlay } = LayersControl;

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

const NDVI_TILE_URL =
  "https://earthengine.googleapis.com/v1/projects/capable-bliss-331511/maps/24883afbb32c03474eeb17789f8040a4-0530ed90e77cd03167669d01e60136a2/tiles/{z}/{x}/{y}";
const SAVI_TILE_URL =
  "https://earthengine.googleapis.com/v1/projects/capable-bliss-331511/maps/b41f2baa2d63bf0b9ad2525211bcc12e-9bdc634de7db05657e43a4a625a34100/tiles/{z}/{x}/{y}";

export default function Map() {
  return (
    <div className="map-container-wrapper">
      <MapContainer center={[18.344944, 73.196667]} zoom={13}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>

          <Overlay name="NDVI Layer">
            <TileLayer url={NDVI_TILE_URL} attribution="NDVI via Google Earth Engine" />
          </Overlay>

          <Overlay name="SAVI Layer">
            <TileLayer url={SAVI_TILE_URL} attribution="SAVI via Google Earth Engine" />
          </Overlay>
        </LayersControl>

        {markers.map((marker, i) => (
          <Marker key={i} position={marker.geocode} />
        ))}
      </MapContainer>
    </div>
  );
}