// components/contact/GMap.js
"use client";

import { useEffect, useState } from "react";

export default function GoogleMap({ mapUrl }) {
  const [mapSrc, setMapSrc] = useState('');

  useEffect(() => {
    setMapSrc(mapUrl);
  }, [mapUrl]);

  return (
    <div className="h-full">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
