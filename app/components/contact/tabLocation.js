"use client";

import { useState } from "react";
import GoogleMap from "@/app/components/contact/GMap";
import Tabs from "@/app/components/contact/tabs"; // Import the Tabs component

const initialCenter = { lat: 20.97654, lng: 105.8610 };

export default function MapTabs() {
    const [center, setCenter] = useState(initialCenter);

    return (
        <div className="flex max-[680px]:block">
            <div className="flex-1 h-[75vh] max-[1100px]:h-[80vh]">
                <GoogleMap center={center} />
            </div>
            <div className="w-2/5 max-[680px]:w-full h-[75vh] max-[1100px]:h-[80vh] overflow-x-hidden overflow-y-auto list-view">
                <Tabs onSelect={setCenter} />
            </div>
        </div>
    );
}
