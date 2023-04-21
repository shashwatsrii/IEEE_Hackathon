import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
import "./Map.css";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXVoEqO1YhLkK_rfPgcqP76GSMeUTeH9s",
  });
  const center = useMemo(() => ({ lat: 7.730724, lng: 30.063535 }), []);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="h-[70vh] w-[80vw]">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={6.8}
          >
            <Marker
              position={{ lat: 7.730724, lng: 30.063535 }}
              icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            />
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default Map;
