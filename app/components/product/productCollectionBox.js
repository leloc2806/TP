import Link from "next/link";
import Image from 'next/image';

export default function CollectionBox({category}){
    return (
        <div className="collection-box">
            <Link className="link-load" href={`/product`}/>
            <div className="pic-img pic-collection">
            <Image 
                loading="lazy" 
                src={`${process.env.NEXT_PUBLIC_API_URL}${category.Image.url}`} 
                alt={category.name}
                className="trans-y lazy" 
                width={200}
                height={200}
            />
            </div>
            <div className="inside-text color-white">
                <h2>{category.name}</h2>
            </div>
        </div>
    )
}