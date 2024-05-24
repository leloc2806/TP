import Link from "next/link";
import Image from 'next/image';

export default function CollectionBox({category, className}){

    const categoryIndex = category.id - 1;


    return (
        <div className={`collection-box ${className}`}>
            <Link className="link-load" href={`/product?tab=${categoryIndex}`}/>
            <div className="pic-img pic-collection">
                {
                    category.Image && category.Image.url
                    ? (<Image 
                        src={`${process.env.NEXT_PUBLIC_API_URL}${category.Image.url}`} 
                        alt={category.name}
                        className="trans-y lazy" 
                        priority
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />)
                    :   (<Image src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`} alt={category.name} width={200} height={200} />)
                }
                
            </div>
            <div className="inside-text color-white">
                <h2>{category.name}</h2>
            </div>
        </div>
    )
}