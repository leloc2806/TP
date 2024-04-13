import TitlePage from "@/app/components/titlepage"
import Slider from "@/app/components/slider"
import Markdown from 'react-markdown';
import { MotionDiv } from "@/app/components/MotionDiv";

async function fetchHeading({params}){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3&filters[slug][$eq]=${params.slug}`

    )
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function fetchRelativeArticle({ categorySlug}){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,2&filters[news_categories][slug][$eq]=${categorySlug}`

    )
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function News({params}) {
    
    const dataSinglePage = await fetchHeading({params});
    
    const detailData = dataSinglePage.data[0].attributes;
    const categories = detailData.news_categories.data;
    const category = categories.map(item => item.attributes.name)
    const categorySlug = categories.map(itemSlug => itemSlug.attributes.slug)
    
    const resRelArticle = await fetchRelativeArticle({categorySlug})
    const relativeArticle = resRelArticle.data

    const content = detailData.article_content[0].content;

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }
    return (
        <MotionDiv 
        variants={variants}
        initial="hidden"
        animate="visible"   
        transition={{
            delay: 1,
            ease: "easeInOut",
            duration: 0.5,
        }}
            
            className="relative m-0 news-detail-page">
                <TitlePage title={'tin tức'} />
                <div className="load-content relative margin mt-[-1px] ml-0 mb-0 overflow-hidden w-full h-auto p-0">
                    <div className="load-details m-0 p-0 z-10 text-[var(--color-black)]">
                        <div className="wrap-content w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10">
                            <div className="load-title relative w-full h-auto m-0 p-0">
                                <div className="news-group-name text-center px-0 pb-8 pt-0 text-xl font-bold text-[var(--color-black50)] relative block w-full h-auto">
                                    {category.length > 1 ? category.join(', ') : category}
                                </div>
                                <h2>{detailData.title}</h2>
                                <div className="date-thumb text-center">by admin | Mar 21, 2024</div>
                            </div>
                            <div className="load-text relative block my-0 mx-auto overflow-hidden p-[40px]">
                                <Markdown>{content}</Markdown>
                            </div>
                            <div className="print">
                                <div className="print-box">
                                    <button className="print-but" aria-label="button">In</button> 
                                    <button className="share-but" aria-label="button">Chia sẻ</button>
                                    <div className="share-item">
                                        <ul>
                                            <li>
                                                <a className="item-facebook" href="http://www.facebook.com/sharer.php?u=https://www.nhojsc.vn/tin-tuc/tin-tuc-/n-h-o-day-manh-hop-tac-cung-kocham-va-hiep-hoi-nguoi-han-quoc-tai-hai-phong.html" target="_blank" rel="noopener">
                                                    <svg x="0px" y="0px" viewBox="0 0 60 60">
                                                        <path fill="currentColor" d="M39.4,23.2h-6.3v-4.1c0-1.5,1-1.9,1.7-1.9c0.7,0,4.4,0,4.4,0v-6.9h-6.1c-6.7,0-8.3,5.1-8.3,8.3v4.4h-3.8v7h3.9c0,9,0,19.8,0,19.8h8.3c0,0,0-11,0-19.8h5.4L39.4,23.2z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>   
                                            <li>
                                                <a className="item-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.nhojsc.vn/tin-tuc/tin-tuc-/n-h-o-day-manh-hop-tac-cung-kocham-va-hiep-hoi-nguoi-han-quoc-tai-hai-phong.html" target="_blank" rel="noopener">
                                                    <svg fill="currentColor" x="0px" y="0px" viewBox="0 0 60 60">
                                                        <rect fill="currentColor" x="16.6" y="23.3" width="6.5" height="22.7"></rect>
                                                        <path fill="currentColor" d="M41.3,24.6c-2.4-1.4-6-1.4-8.6-0.3v-1h-6.5V46h6.5V31.5l2.7-1.3c0.7-0.3,2.1-0.3,2.7,0.1c0.5,0.2,1.1,1.3,1.1,2v13.8h6.5V32.3C45.7,29.3,43.9,26.1,41.3,24.6z"></path>
                                                        <path fill="currentColor" d="M19.8,12.8c-2.3,0-4,1.8-4,4c0,2.3,1.8,4,4,4c2.3,0,4-1.8,4-4C23.9,14.6,22.1,12.8,19.8,12.8z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                        </div>
                    </div>

                </div>
                <Slider data={relativeArticle} slug={params.slug}/>
        </MotionDiv>

    )
}
