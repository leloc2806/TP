import TitlePage from "@/app/components/titlepage";
import flattenAttributes from "@/app/lib/utils";
import Markdown from 'react-markdown';
import { MotionDiv } from "@/app/components/MotionDiv";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import ProductSlider from "@/app/components/product/productSlider";

async function getProductDetail({params}){
    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,2&filters[slug][$eq]=${params.proId}`, { next: { revalidate: 60 } }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }
    catch(error){
        // Handle errors here, such as logging or displaying an error message
        console.error("Error fetching product data:", error.message);
        throw error; // Re-throw the error to be handled by the caller if needed
    }
}

async function fetchRelativeProduct({ categorySlug}){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,2&filters[product_category][slug][$eq]=${categorySlug}`, { next: { revalidate: 60 } }

    )
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

function getObjectFromSingleElementArray(array) {
    // Check if the input is an array and has exactly one element
    if (Array.isArray(array) && array.length === 1) {
      // Return the first (and only) element of the array
      return array[0];
    } else {
      // If the input is not an array or doesn't have exactly one element, return null or handle the error as needed
      return null;
    }
}

export default async function Pro({params}){

    const pro = await getProductDetail({params});
    const product = flattenAttributes(pro.data);
    const productDetail = getObjectFromSingleElementArray(product)

    const categorySlug = productDetail.product_category.slug

    const resRelProduct = await fetchRelativeProduct({categorySlug})
    const relProduct = flattenAttributes(resRelProduct.data)

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
            
            className="relative m-0 products-detail-page"
        >
            <TitlePage title={productDetail.title}/>
            <div className="load-content relative margin mt-[-1px] ml-0 mb-0 overflow-hidden w-full h-auto p-0">
                <div className="load-details m-0 p-0 z-10 text-[var(--color-black)]">
                    <div className="wrap-content w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10 flex max-[1100px]:flex-col">
                        <div className="block w-[60%] max-[1100px]:w-full">
                        {
                            productDetail && productDetail.thumbnail && productDetail.thumbnail.url 
                            ? (
                                <Image 
                                    className="w-full lazyloaded h-full object-center" 
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${productDetail.thumbnail.url}`}
                                    alt={productDetail.thumbnail.name || 'Product Logo'}
                                    width={300}
                                    height={300}
                                />
                                )
                            : (
                                <Image 
                                    className="w-full lazyloaded h-full object-center" 
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`}
                                    alt="Image not found"
                                    width={300}
                                    height={300}
                                />
                                )
                        }

                            
                        </div>
                        <div className="w-[40%] max-[1100px]:w-full">
                            <div className="rounded-xl px-[28px] pb-[14px] pt-[5px] max-[1100px]:px-0 lg:py-4 bg-primary/10">
                                <div className="text-secondary font-medium text-[30px] lg:text-[32px]">
                                    {productDetail.title}
                                                               
                                </div>
                                <div className="text-secondary text-[26px] lg:text-[30px] font-normal text-red-600 lg:py-4 pt-[5px]">
                                    Giá: Liên hệ
                                </div>
                            </div>
                            <div className="rounded-xl px-[28px] pb-[14px] pt-[5px] max-[1100px]:px-0 lg:py-4 flex justify-between bg-primary/10">
                                <span className="font-light text-secondary lg:text-[21px] text-[16px]">
                                    <Markdown 
                                        className={'markdown'} 
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {productDetail.description}
                                    </Markdown>
                                </span>
                            </div>
                            <div className="relative block w-full h-auto mt-[20px] mx-0 mb-0 px-[28px] max-[1100px]:px-0">
                                <span className="relative inline-block p-[15px] rounded bg-red-600 uppercase font-bold text-white border-0 text-[18px] lg:text-[22px]">Hotline: 03999999999</span>
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
                        <div className="relative block my-0 mx-auto overflow-hidden p-[10px] text-[18px] max-[560px]:px-[0px]">
                            <Markdown 
                                className={'markdown'} 
                                remarkPlugins={[remarkGfm]}
                            >
                                {productDetail.content}
                            </Markdown>
                        </div>
                    </div>
                </div>
                <ProductSlider data={relProduct} slug={params.slug}/>
            </div>
        </MotionDiv>
    )
}