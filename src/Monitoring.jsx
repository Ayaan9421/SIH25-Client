import Analytics from "./analyticsAndTools/Analytics.jsx";

export default function Monitoring({ type }) {
  return (
    <>
      <h2 style={{ margin: "1rem" }}>{type}</h2>
      {type === "weather data" && <Analytics />}
    </>
  );
}