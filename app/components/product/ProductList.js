'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductList = ({ params, data, currentPage, pageSize, title }) => {
    console.log(params)
    const [productCategory, setProductCategory] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const totalPages = productCategory.meta.pagination.pageCount;

    const handlePageChange = async (page) => {
        setIsLoading(true);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,3&filters[product_category][slug][$eq]=${params.productId}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`, 
            { cache: 'no-store' }
        );
        const newData = await res.json();
        setProductCategory(newData);
        setIsLoading(false);
        router.push(`/san-pham/${params.productId}?page=${page}`);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const detailData = productCategory.data

    return (
        <div className="relative m-0 product-cat-page">
            <div className="title-page block relative h-auto w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem] max-[1100px]:pt-[160px] max-[1100px]:pb-[20px] max-[580px]:pt-[120px]">
                <div className="relative block w-full h-auto overflow-hidden">
                    <h1 className="text-[4vw] font-normal relative block">{title}</h1>
                </div>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
            </div>

            <div className="section-outernav">
                <div className="outer-nav w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-xl pt-12">
                    <div className="sub-nav">
                        <div className="wrap-content min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10">
                            <div className='load-news-list relative w-full h-auto flex flex-wrap'>
                                {detailData
                                    .sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt))
                                    .map((product) => (
                                        <Link key={product.id} className='item-product-category relative block' href={`/san-pham/${params.categoryId}/${params.productId}/${product.attributes.slug}`}>
                                            <div className="product-category-pic relative">
                                                <div className="wrap-product-category-pic relative">
                                                    <div className="pic-img relative">
                                                        {
                                                            product.attributes.thumbnail.data && product.attributes.thumbnail.data.attributes.url
                                                            ? (<Image 
                                                                src={`${process.env.NEXT_PUBLIC_API_URL}${product.attributes.thumbnail.data.attributes.url}`} 
                                                                alt={`Thumbnail image of ${product.attributes.title}`}
                                                                width={2000} 
                                                                height={1125} 
                                                                className="trans-y lazy" 
                                                                priority 
                                                            />)
                                                            : (<Image 
                                                                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`} 
                                                                alt="Image not found" 
                                                                width={2000} 
                                                                height={1125} 
                                                                className="trans-y lazy" 
                                                                priority 
                                                            />)
                                                        }

                                                    </div>
                                                </div>
                                                <div className="absolute product-category-text text-[var(--color-white)]">
                                                    <div className="title-ani ani-item on-show">
                                                        <h2 className='text-3xl leading-normal'>{product.attributes.title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                            {totalPages > 1 
                                ? <div className="pagination relative my-[20px]">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`pagination-bullet ${index + 1 === currentPage ? 'pagination-bullet-active' : ''}`}
                                    >
                                        {index < 9 ? `0${index + 1}` : index + 1}
                                    </button>
                                ))}
                                </div>
                                : ''
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
