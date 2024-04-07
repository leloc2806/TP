"use client"

import { Tab } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react'; 


export default function NewTab({data}){
    return(
        <>
            <Tab.Group>
                <Tab.List>
                {data.map((tab) => (
                    <Tab as={Fragment} key={tab.id} className={`${tab.id === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9'}`}>
                    {({ selected }) => (
                        <button
                        className={
                            selected ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 selected' : 'opacity-60 hover:opacity-100'
                        }
                        >
                        {tab.attributes.name}
                        </button>
                    )}
                    </Tab>
                ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel><h1>content1</h1></Tab.Panel>
                    <Tab.Panel><h1>content2</h1></Tab.Panel>
                    <Tab.Panel><h1>content3</h1></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}