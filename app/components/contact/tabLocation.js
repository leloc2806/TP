// components/contact/MapTabs.js
"use client";

import { useState } from "react";
import GoogleMap from "@/app/components/contact/GMap";
import Tabs from "@/app/components/contact/tabs";

const initialUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.402712830192!2d105.85827429529358!3d20.976488298693116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad002b3a2795%3A0xe0af33d1003ebc26!2zQ8O0bmcgdHkgQ1AgbsSDbmcgbMaw4bujbmcgVGjDoG5oIFBow6F0!5e0!3m2!1sen!2s!4v1720681485111!5m2!1sen!2s';

export default function MapTabs() {
  const [mapUrl, setMapUrl] = useState(initialUrl);

  return (
    <div className="flex max-[680px]:block">
      <div className="flex-1 h-[75vh] max-[1100px]:h-[80vh]">
        <GoogleMap mapUrl={mapUrl} />
      </div>
      <div className="w-2/5 max-[680px]:w-full h-[75vh] max-[1100px]:h-[80vh] overflow-x-hidden overflow-y-auto list-view">
        <Tabs onSelect={setMapUrl} />
      </div>
    </div>
  );
}
