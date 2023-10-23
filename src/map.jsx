import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 10.790179208611749,
  lng: 106.702539180373,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD2TK1mTcaD8m6xYtRqa6IiQIXM3PnCUJw",
    language: "vi",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} title="Địa điểm tổ chức" />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
