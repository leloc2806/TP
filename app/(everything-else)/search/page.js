"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { get } from "lodash";
import flattenAttributes from "@/app/lib/utils";
import TitlePage from "@/app/components/titlepage";
import SectionComponent from "@/app/components/sectionComponent";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export async function fetchPosts({queryKey, pageParam = 1}) {

    const [_, searchTerm] = queryKey;

    let searchUrl;

    let loadUrl = `&pagination[page]=${pageParam}&pagination[pageSize]=5`;

    if (searchTerm) {
        searchUrl = `&filters[title][$contains]=${searchTerm}`;
      }

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=createdAt&populate[1]=logo&sort=createdAt:desc${searchUrl}${loadUrl}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
}

// const Post = ({}) => {

// }

function extractData(jsonObject) {
    // Check if the input is an object and contains the "data" property
    if (typeof jsonObject === 'object') {
        return jsonObject.data; // Return the "data" array
    } else {
        // If the input is not as expected, return null or handle the error accordingly
        return null;
    }
}

function Post({key, post}){
    const inputDate = new Date(post.createdAt);
    const dateObj = new Date(inputDate);
    const outputDate = format(dateObj, "MM/dd/yy");
    return(
        <Link 
            className={"item-search ani-item on-show"}
            href={`/product/${post.slug}`}
            key={key}
        >
            <div class="pic-search">
                {
                    post.logo.url 
                    ?
                    <Image 
                        src={`${process.env.NEXT_PUBLIC_API_URL}${post.logo.url}`} 
                        alt={post.logo.alt} 
                        width={1000}
                        height={1000}    
                    />
                    :
                    ( <Image src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`} 
                            alt={post.logo.alt} 
                            width={1000} 
                            height={1000}
                    /> )
                }
            </div>
            <div className="title-search">
                <h3>{post.title}</h3>
                <span className="link-load">{post.excerpt}</span> 
                <span className="date-load">{outputDate}</span>
            </div>
        </Link>
    )
}

export default function Search(){
    const search = useSearchParams();
    const searchQuery = search ? search.get("q") : null

    const encondedSearchQuery = encodeURI(searchQuery || "")

    console.log("Search params", encondedSearchQuery);

    const {
        status,
        data: posts,
        isFetching,
    } = useQuery({
        queryKey: ["posts", encondedSearchQuery],
        queryFn: fetchPosts,
    });

    let postsData;
    let showCount;

    if (status === "success") {

        let groupPost = flattenAttributes(extractData(posts))
        console.log(groupPost);
        showCount = `${groupPost.length} tìm kiếm`

        postsData =
            groupPost.length > 0 ? 
            (
                groupPost.map((post, index) => (
                <Post key={index} post={post} />
                ))
            )
        
        : 
        (
        <div className={"section-page pb-[60px]"}>
            <div className={"page-container"}>
                <div className={"heading-1"}>0 Search results</div>
                <div className={"intro"}>
                    Unfortunately, your search did not return any results. Please try
                    again using a different search term.
                </div>
            </div>
        </div>
        );
    }
    
    
    return (
        <div className="relative m-0 search-result">
            <TitlePage title={"Tìm kiếm "}/>
            <SectionComponent>
                <div className="w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-xl z-10 py-[5vw] max-[1100px]:pt-[60px] px-0">
                    <div className={"wrap-content"}>
                        <div className={"title-big text-ani-item color-blue"}>
                            <h2 className={"text-title-about block"}>{showCount}</h2>
                        </div>
                        <div className={"search-box"}>
                            <div className={"list-result"}>
                                
                            </div>
                        </div>
                    </div>
                    {postsData}

                </div>

            </SectionComponent>
        </div>
        
    )
}