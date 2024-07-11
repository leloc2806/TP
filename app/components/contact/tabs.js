// components/contact/tabs.js

import { Tab } from '@headlessui/react';
import Link from 'next/link';

const locations = [
  { name: '157 Louis 1, Phường Yên Sở, Quận Hoàng Mai, Hà Nội', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.402712830192!2d105.85827429529358!3d20.976488298693116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad002b3a2795%3A0xe0af33d1003ebc26!2zQ8O0bmcgdHkgQ1AgbsSDbmcgbMaw4bujbmcgVGjDoG5oIFBow6F0!5e0!3m2!1sen!2s!4v1720681485111!5m2!1sen!2s', phone: '0917189898' },
];
  // Add more locations as needed

  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ onSelect }) {
  return (
    <Tab.Group>
      <Tab.List className="flex flex-col bg-blue-900/20">
        {locations.map((location) => (
          <Tab
            key={location.name}
            onClick={() => onSelect(location.url)}
            className={({ selected }) =>
              classNames(
                'p-[25px] leading-5 font-medium text-left',
                selected ? 'bg-[var(--bgactive)] text-[var(--color-white)]' : 'text-[var(--bgactive)]'
              )
            }
          >
            <>
              <h3 className="mb-[10px]">Trụ sở chính</h3>
              <div>
                <p className="font-light pb-2">{location.name}</p>
              </div>
              <div>
                <Link className='font-light' href={`tel:${location.phone}`}>{location.phone}</Link>
              </div>
            </>
          </Tab>
        ))}
      </Tab.List>
      {/* Hidden Tab.Panels to avoid React state updates during rendering */}
      <Tab.Panels className="hidden">
        {locations.map((location) => (
          <Tab.Panel key={location.name} />
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
