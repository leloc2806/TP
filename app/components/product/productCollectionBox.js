import Link from "next/link";
import Image from 'next/image';

export default function CollectionBox({ category, className }) {
    return (
        <div className={`collection-box ${className}`}>
            <Link className="link-load" href={`/san-pham?tab=${category.slug}`} aria-label={`View products in ${category.name}`}/>
            <div className="pic-img pic-collection relative">
                {category.Image && category.Image.url ? (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${category.Image.url}`}
                        alt={`Image of ${category.name}`}
                        className="trans-y lazy"
                        priority
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`}
                        alt="Image not found"
                        layout="responsive"
                        width={200}
                        height={200}
                    />
                )}
            </div>
            <div className="inside-text color-white">
                <h2>{category.name}</h2>
            </div>
        </div>
    );
}
