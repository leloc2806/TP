"use client"

import { Tab } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import ArticleCard from './articlecard';



function NewList({data}){

    const post = data.attributes;
    // const firstName = post.createdBy.data.attributes.firstname;
    // const lastName = post.createdBy.data.attributes.lastname;

    // const author = `${firstName} ${lastName}`
    const width = 2000
    const height = 1333
    const url = post.thumbnail.data.attributes.url;

    return (
        <ArticleCard post={post} url={url} width={width} height={height}/>
    )
}

export default function NewTab({data}){ 

    return(
        <div className="section-outernav">
            <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                <div className="sub-nav">
                    <Tab.Group>
                        <Tab.List>
                        {data[1].map((category) => (
                            <Tab 
                                key={category.id} 
                                data-index-number={category.id}
                                className={({selected}) => classNames(
                                    category.id === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9',
                                    selected
                                    ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 selected' 
                                    : 'opacity-60 hover:opacity-100'
                                )}
                            >
                            {category.attributes.name}
                            </Tab>
                        ))}
                        </Tab.List>
                        <Tab.Panels>
                        {data[1].map((posts) => (
                            <Tab.Panel 
                                key={posts.id}
                                className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10'
                            >
                                <div className='load-news-list relative w-full h-auto '>
                                    <div className='news-list flex justify-start flex-wrap m-auto'>
                                    {posts.attributes.articles.data.map((post) => (
                                        <NewList key={post.id} data={post}/>
                                    ))}
                                    </div>
                                </div>
                            </Tab.Panel>
                        ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}