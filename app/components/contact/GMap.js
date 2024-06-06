"use client";

export default function GoogleMap ({ center }) {
  const mapSrc = `https://maps.google.com/maps?q=${center.lat},${center.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div>
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
