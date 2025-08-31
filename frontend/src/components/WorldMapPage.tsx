import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export const WorldMapPage = () => {
  const [geoInfo, setGeoInfo] = useState<GeolocationPosition | null>(null);
  const logLat = navigator.geolocation.getCurrentPosition((position) => ({
    ...position,
  }));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoInfo(position);
    });
  }, []);
  if (!geoInfo) return <h1>Loading map...</h1>;
  return (
    <div className="h-[100vh] w-full">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[geoInfo.coords.latitude, geoInfo.coords.longitude]}>
          <Popup>{"current"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
