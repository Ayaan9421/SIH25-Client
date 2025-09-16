import "./Map.css";
import { MapContainer, TileLayer, Marker, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer, Overlay } = LayersControl;

const markers = [
  {
    geocode:  [18.344947, 73.196257],
    popUp: "Centroid"
  },
//   {
//     geocode: [18.34569683224248, 73.19445537151846],
//     popUp: "Hello, I am pop up 2"
//   },
//   {
//     geocode: [18.33885335768168, 73.19222377361807],
//     popUp: "Hello, I am pop up 3"
//   },
//   {
//     geocode: [18.339097772153576, 73.20218013348135],
//     popUp: "Hello, I am pop up 4"
//   },
//   {
//     geocode: [18.35082926029821, 73.20080684246572],
//     popUp: "Hello, I am pop up 5"
//   },
//   {
//     geocode: [18.350258998044247, 73.19162295879873],
//     popUp: "Hello, I am pop up 6"
//   },
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
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="&copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community"
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