"use client";

export default function GoogleMap ({ center }) {
  // const mapSrc = `https://maps.google.com/maps?q=${center.lat},${center.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${center.lat},${center.lng}`;

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
