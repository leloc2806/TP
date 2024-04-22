import Link from "next/link";
import Image from "next/image";

async function getProductCategory({params}) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product-categories?populate=deep,3&filters[slug][$eq]=${params.productId}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}


export default async function ProductId({params}){

    const productCategory = await getProductCategory({params});
    const detailData = productCategory.data[0].attributes

    return (
        <>
            <div className="relative m-0 product-cat-page">
                <div className="title-page block relative h-auto w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                    <div className="relative block w-full h-auto overflow-hidden">
                        <h1 className="text-[6vw] font-normal relative block">{detailData.name}</h1>
                    </div>   
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                </div>

                <div className="section-outernav">
                    <div className="outer-nav w-[80vw] mx-auto font-normal text-xl pt-12">
                        <div className="sub-nav">
                            <div className="className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10">
                                <div className='load-news-list relative w-full h-auto flex flex-wrap'>
                                    {detailData.products.data.map((product) => ( 
                                        <Link key={product.id} className='item-product-category relative block' href={`/product/${params.productId}/pro/${product.attributes.slug}`}>
                                            <div className="product-category-pic relative">
                                                <div className="wrap-product-category-pic relative">
                                                    <div className="pic-img relative">
                                                        {
                                                            product.attributes.logo.data && product.attributes.logo.data.attributes.url 
                                                            ? ( <Image src={`${process.env.NEXT_PUBLIC_API_URL}${product.attributes.logo.data.attributes.url}`} alt={product.attributes.title} width={2000} height={1125}/> )
                                                            : ( <Image src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`} alt={product.attributes.title} width={2000} height={1125}/> )
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                <div className="absolute product-category-text text-[var(--color-white)]">
                                                    <div className="title-ani ani-item on-show">
                                                        <h2 className='text-3xl'>{product.attributes.title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        // <Link class="item-product other_exists block relative">
                                        //     <img src="https://jebgroup.com/wp-content/themes/jeb/assets/images/partition-product.jpg" alt="">
                                        //     <div class="image-thumb">
                                        //         <a href="https://jebgroup.com/product/xseries/">
                                        //             <img src="https://jebgroup.com/wp-content/uploads/2023/01/White-Case_0872-scaled.jpg" alt="image thumb">
                                        //         </a>
                                        //     </div>
                                        //     <div class="image-other">   
                                        //         <a href="https://jebgroup.com/product/xseries/">
                                        //             <img src="https://jebgroup.com/wp-content/uploads/2023/01/DSC_8906.jpg" alt="image other">
                                        //         </a>
                                        //     </div>
                                        //     <div class="name-product name-wishlist">
                                        //         <a href="https://jebgroup.com/product/xseries/">
                                        //             <h6>X-SERIES</h6>
                                        //         </a>
                                        //     </div>
                                        // </Link>     
                                    ))}
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

            </div>
        </>
    )
}