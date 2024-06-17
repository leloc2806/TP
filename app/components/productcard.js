import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({post, url, width, height, slug}){

    return (
        <>
            
            <Link href={`/san-pham/${post.product_category.slug}/${post.slug}`} className={`item-news ${slug && post.slug === slug ? 'current' : ''}`}>

                <div className="pic-news relative">
                    <div className="pic-img pt-[60%] relative block w-full h-auto overflow-hidden">
                        {
                            post.thumbnail && post.thumbnail.url 
                            ? (<Image className='absolute w-full h-full top-0 left-0 object-cover object-center pointer-events-none' 
                                src={`${process.env.NEXT_PUBLIC_API_URL}${url}`} 
                                alt={post.thumbnail.name} 
                                width={post.thumbnail.width} 
                                height={post.thumbnail.height}
                                sizes="(max-width: 600px) 100vw, 50vw"
                            />)
                            : (<Image 
                                className="absolute w-full h-full top-0 left-0 object-cover object-center pointer-events-none" 
                                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`}
                                alt="Image not found"
                                width={300}
                                height={300}
                            />)
                        }
                        
                    </div>
                </div>
                <div className="txt-news relative block w-full h-auto text-[var(--bgactive)] pt-[0.5rem] pr-[10px] pb-0 pl-0">
                    <div className="date-thumb">by admin | {post.date} </div>
                    <h3 className="line-clamp-3 overflow-hidden text-ellipsis uppercase">{post.title}</h3>
                </div>
                <div className="view-more absolute bottom-0 left-0 inline-block my-8 mx-0">
                    <span className="link-load relative flex items-center font-bold py-[5px] px-0 text-base uppercase my-0 mr-[10px] ml-0 text-[var(--color-black30)]">
                        xem thêm
                    </span>
                </div>
                <div className='hidden' data-type={`${post.slug}`}></div>
            </Link>
        </>

    )
}