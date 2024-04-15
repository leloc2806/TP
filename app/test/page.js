"use client"

import {
    useQuery
} from '@tanstack/react-query'

import { useState } from 'react'
import Tabs from '../components/Tabs'

export default function Test() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about-us-our-story?populate=deep,3`).then((res) =>
            res.json(),
    ),
})

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

const ourStoryTitleLeft1 = data.data.attributes.TitleLeft1;
const ourStoryTitleLeft2 = data.data.attributes.TitleLeft2;
const ourStoryUpperTitle3 = data.data.attributes.UpperTitle3;
const ourStoryRightContent1 = data.data.attributes.RightContent1;
const ourStoryRightContent2 = data.data.attributes.RightContent2;

return (
        <div>
            <h1>{ourStoryTitleLeft1}</h1>
            <p>{ourStoryTitleLeft2}</p>
            <strong>👀 {ourStoryUpperTitle3}</strong>{' '}
            <strong>✨ {ourStoryRightContent1}</strong>{' '}
            <strong>🍴 {ourStoryRightContent2}</strong>
            <Tabs/>
        </div>
    )
}