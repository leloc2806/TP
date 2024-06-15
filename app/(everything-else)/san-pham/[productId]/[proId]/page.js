import TitlePage from "@/app/components/titlepage";
import flattenAttributes from "@/app/lib/utils";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { MotionDiv } from "@/app/components/MotionDiv";
import remarkGfm from "remark-gfm";
import ProductSlider from "@/app/components/product/productSlider";
import ProductImageSlider from "@/app/components/product/ImageProductSlide";

// Helper function to extract single element array
function getObjectFromSingleElementArray(array) {
    return Array.isArray(array) && array.length === 1 ? array[0] : null;
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,3&filters[slug][$eq]=${params.proId}`, { next: { revalidate: 60 } });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const post = await res.json();

        const produc = flattenAttributes(post.data);
        const productD = getObjectFromSingleElementArray(produc);

        return {
            title: `${productD.SEO?.metaTitle || productD.title} | Thanh Phat`,
            authors: [
                {
                    name: productD.SEO ? 'admin' : 'Thanh Phat'
                }
            ],
            description: productD.SEO?.metaDescription || productD.excerpt || productD.description,
            keywords: productD.SEO?.keywords || '',
            openGraph: {
                title: `${productD.SEO?.metaTitle || productD.title} | Thanh Phat`,
                description: productD.SEO?.metaDescription || productD.excerpt || productD.description,
                type: "website",
                url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}product/${params.productId}/${productD.slug}`,
                publishedTime: productD.created_at,
                authors: [`${process.env.NEXT_PUBLIC_API_ENDPOINT}about`],
                tags: productD.categories,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_API_URL}${productD.SEO?.metaImage?.url || productD.thumbnail.url}`,
                        width: 1024,
                        height: 576,
                        alt: productD.title,
                        type: "image/jpg"
                    }
                ]
            },
            twitter: {
                card: "summary_large_image",
                site: "@thanhphat",
                creator: "@thanhphat",
                title: `${productD.SEO?.metaTitle || productD.title} | thanhphat`,
                description: productD.SEO?.metaDescription || productD.excerpt || productD.description,
            },
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_API_ENDPOINT}product/${productD.categories}/${productD.slug}`
            }
        };
    } catch (error) {
        console.error("Error generating metadata:", error.message);
        throw error;
    }
}

// Fetch social links
async function fetchSocial() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social?populate=deep,2`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching social links:", error.message);
        throw error;
    }
}

// Fetch product details based on the slug
async function getProductDetail({ proSlug }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,3&filters[slug][$eq]=${proSlug}`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching product details:", error.message);
        throw error;
    }
}

// Fetch related products based on the category slug
async function fetchRelativeProduct({ categorySlug }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,2&filters[product_category][slug][$eq]=${categorySlug}`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching related products:", error.message);
        throw error;
    }
}

// Main component to display product details
export default async function Pro({ params }) {
    const proSlug = params.proId;

    try {
        const [socialLink, pro] = await Promise.all([fetchSocial(), getProductDetail({ proSlug })]);

        const social = flattenAttributes(socialLink);
        const product = flattenAttributes(pro.data);
        const productDetail = getObjectFromSingleElementArray(product);

        if (!productDetail) {
            throw new Error("Product detail not found");
        }

        const categorySlug = productDetail.product_category.slug;
        const resRelProduct = await fetchRelativeProduct({ categorySlug });
        const relProduct = flattenAttributes(resRelProduct.data);

        const variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        };

        return (
            <MotionDiv
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1, ease: "easeInOut", duration: 0.5 }}
                className="relative m-0 products-detail-page"
            >
                <TitlePage title={productDetail.title} />
                <div className="load-content relative margin mt-[-1px] ml-0 mb-0 overflow-hidden w-full h-auto p-0">
                    <div className="load-details m-0 p-0 z-10 text-[var(--color-black)]">
                        <div className="wrap-content w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10 flex flex-wrap">
                            <div className="block product-gallery">
                                {productDetail.Image_slider ? (
                                    <ProductImageSlider data={productDetail.Image_slider} />
                                ) : (
                                    <ProductImageSlider firstImage={productDetail.thumbnail} />
                                )}
                            </div>

                            <div className="product-info">
                                <div className="rounded-xl px-[28px] pb-[14px] pt-[5px] max-[1100px]:px-0 lg:py-4 bg-primary/10">
                                    <div className="text-secondary font-medium text-[30px] lg:text-[32px] text-blue-500">
                                        {productDetail.title}
                                    </div>
                                    <div className="text-secondary text-[26px] lg:text-[30px] font-normal text-red-600 lg:py-4 pt-[5px]">
                                        Giá: Liên hệ
                                    </div>
                                </div>
                                <div className="rounded-xl px-[28px] pb-[14px] pt-[5px] max-[1100px]:px-0 lg:py-4 flex justify-between bg-primary/10">
                                    <span className="font-light text-secondary lg:text-[21px] text-[16px]">
                                        <Markdown className="markdown" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                                            {productDetail.description}
                                        </Markdown>
                                    </span>
                                </div>
                                <div className="relative block w-full h-auto mt-[20px] mx-0 mb-0 px-[28px] max-[1100px]:px-0">
                                    <span className="relative inline-block p-[15px] rounded bg-red-600 uppercase font-bold text-white border-0 text-[18px] lg:text-[22px]">Hotline: {social.Phone}</span>
                                </div>
                            </div>

                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                        </div>
                        <div className="title-page block relative h-auto w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-[5vw] pt-[3rem] max-[1100px]:px-[0rem] pb-[3rem] max-[1100px]:pt-[40px] max-[1100px]:pb-[20px] max-[580px]:pt-[30px]">
                            <div className="relative block w-full h-auto overflow-hidden">
                                <h1 className="text-[5vw] font-thin relative block uppercase">Mô tả</h1>
                            </div>
                        </div>

                        <div className="wrap-content w-[var(--wrapcontent)] m-auto py-[2vw] max-[1100px]:px-0 relative h-auto z-10">
                            <div className="relative block my-0 mx-auto overflow-hidden p-[10px] lg:text-[21px] text-[16px] max-[560px]:px-[0px]">
                                <Markdown className="markdown" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                                    {productDetail.content}
                                </Markdown>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                        </div>
                    </div>
                    <ProductSlider data={relProduct} slug={params.slug} />
                </div>
            </MotionDiv>
        );
    } catch (error) {
        return (
            <div className="error-message">
                <h1>Error loading product details</h1>
                <p>{error.message}</p>
            </div>
        );
    }
}
