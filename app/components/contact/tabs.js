"use client";

import { Tab } from '@headlessui/react';
import Link from 'next/link';

const locations = [
  { name: 'Head Office', center: { lat: 20.97654, lng: 105.8610 }, phone: '+84 999999999' },
  { name: 'Branch Office', center: { lat: 21.028511, lng: 105.804817 }, phone: '+84 999999999' },
  // Add more locations as needed
];

export default function Tabs({ onSelect }) {
  return (
    <Tab.Group>
      <Tab.List className="flex flex-col bg-blue-900/20">
        {locations.map((location) => (
          <Tab
            key={location.name}
            className={({ selected }) =>
              selected
                ? 'p-[25px] leading-5 font-medium bg-[var(--bgactive)] text-[var(--color-white)] text-left'
                : 'p-[25px] leading-5 font-medium text-[var(--bgactive)] text-left'
            }
          >
            <>    
                <h3 className={'mb-[10px]'}>Trụ sở chính</h3>
                <div>
                    <p>{location.name}</p>
                </div>
                <div>
                    <Link href={`tel:${location.phone}`}>{location.phone}</Link>
                </div>
            </>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="hidden">
        {locations.map((location) => (
          <Tab.Panel key={location.name}>
            {() => {
              onSelect(location.center);
              return null;
            }}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
