"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Loading() {
    return <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed">
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    Processing...
  </button>;
}

export default function GMap({ center, className }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "600px" }}
        center={center}
        zoom={18}
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return (
    <div id="map-section" className={className}>
      {isLoaded ? (
        renderMap()
      ) : (
        <Loading />
      )}
    </div>
  );
}
