import TitlePage from "@/app/components/titlepage";
import Slider from "@/app/components/news/newSlider";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { MotionDiv } from "@/app/components/MotionDiv";
import remarkGfm from "remark-gfm";
import flattenAttributes from "@/app/lib/utils";

function getObjectFromSingleElementArray(array) {
    return Array.isArray(array) && array.length === 1 ? array[0] : null;
}

export async function generateMetadata({ params }) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3&filters[slug][$eq]=${params.slug}`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const post = await res.json();
        const postDetail = flattenAttributes(post.data);
        const postFin = getObjectFromSingleElementArray(postDetail);

        return {
            title: `${postFin.SEO?.metaTitle || postFin.title}`,
            authors: [
                {
                    name: 'admin' || "Thành Phát"
                }
            ],
            description: postFin.SEO?.metaDescription || postFin.excerpt,
            keywords: postFin.SEO?.keywords || '',
            openGraph: {
                title: `${postFin.title} | Thành Phát`,
                description: postFin.SEO?.metaDescription || postFin.excerpt,
                type: "website",
                url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}tin-tuc/${postFin.slug}`,
                publishedTime: postFin.created_at,
                authors: `admin`,
                tags: postFin.categories,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_API_URL}${postFin.SEO?.metaImage?.url || postFin.thumbnail?.url}`,
                        width: 1024,
                        height: 576,
                        alt: postFin.title,
                        type: "image/jpg"
                    }
                ]
            },
            twitter: {
                card: "summary_large_image",
                site: "@thanhphat",
                creator: "@thanhphat",
                title: `${postFin.SEO?.metaSocial?.[1]?.title || postFin.title} | Thành Phát`,
                description: postFin.excerpt,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_API_URL}${postFin.SEO?.metaImage?.url || postFin.thumbnail?.url}`,
                        width: 1200,
                        height: 630,
                        alt: "thanhphat"
                    }
                ]
            },
            alternates: {
                canonical: `/tin-tuc/${params.catSlug}/${postFin.slug}`
            }
        };
    } catch (error) {
        console.error("Error generating metadata:", error.message);
        throw error;
    }
}

async function fetchHeading({ params }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3&filters[slug][$eq]=${params.slug}`, 
        { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function fetchRelativeArticle({ categorySlug }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,2&filters[news_categories][slug][$eq]=${categorySlug}`, 
        { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function News({ params }) {

    const dataSinglePage = await fetchHeading({ params });
    const testDetail = flattenAttributes(dataSinglePage.data);
    const test = getObjectFromSingleElementArray(testDetail);

    if (!test) {
        throw new Error("Article not found");
    }

    const detailData = dataSinglePage.data[0].attributes;
    const categories = detailData.news_categories.data;
    const category = categories.map(item => item.attributes.name);
    const categorySlug = categories.map(itemSlug => itemSlug.attributes.slug);

    const resRelArticle = await fetchRelativeArticle({ categorySlug });
    const relativeArticle = flattenAttributes(resRelArticle.data);

    const content = detailData.article_content[0]?.content || "No content available";

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

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
            className="relative m-0 news-detail-page"
        >
            <TitlePage title={'tin tức'} />
            <div className="load-content relative margin mt-[-1px] ml-0 mb-0 overflow-hidden w-full h-auto p-0">
                <div className="load-details m-0 p-0 z-10 text-[var(--color-black)]">
                    <div className="wrap-content w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10">
                        <div className="load-title relative w-full h-auto m-0 p-0">
                            <div className="news-group-name text-center px-0 pb-8 pt-0 text-xl font-bold text-[var(--color-black50)] relative block w-full h-auto">
                                {category.length > 1 ? category.join(', ') : category}
                            </div>
                            <h2>{detailData.title}</h2>
                            <div className="date-thumb text-center">by admin | {formatDate(detailData.createdAt)}</div>
                        </div>
                        <div className="load-text relative block my-0 mx-auto overflow-hidden p-[40px]">
                            <Markdown 
                                className={'markdown'} 
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >
                                {content}
                            </Markdown>
                            <Markdown
                                className={'markdown'} 
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >
                                {detailData.test}
                            </Markdown>
                        </div>
                        <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                    </div>
                </div>
            </div>
            <Slider data={relativeArticle} slug={params.slug} catSlug={params.catSlug}/>
        </MotionDiv>
    );
}
