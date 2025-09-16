import Map from "./map/Map";


export default function Tools({ type }) {
  return (
    <>
      <h2 style={{ margin: "1rem" }}>{type}</h2>
      {type === "Spectral Imaging" && <Map />}
    </>
  );
}