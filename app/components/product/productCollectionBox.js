import Link from "next/link";
import Image from 'next/image';

export default function CollectionBox({ category, className }) {
    // Default dimensions for the fallback image
    const defaultWidth = 200;
    const defaultHeight = 200;

    // Check if category.Image exists and has a url
    const hasImage = category.Image && category.Image.url;
    const imageUrl = hasImage ? `${process.env.NEXT_PUBLIC_API_URL}${category.Image.url}` : `${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`;

    // Use actual dimensions if available, otherwise fallback to default
    const imageWidth = hasImage ? category.Image.width : defaultWidth;
    const imageHeight = hasImage ? category.Image.height : defaultHeight;

    return (
        <div className={`collection-box ${className}`}>
            <Link className="link-load" href={`/san-pham?tab=${category.slug}`} aria-label={`View products in ${category.name}`}/>
            <div className="pic-img pic-collection relative">
                <Image
                    src={imageUrl}
                    alt={hasImage ? `Image of ${category.name}` : "Image not found"}
                    className="trans-y lazy"
                    priority
                    width={imageWidth}
                    height={imageHeight}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="inside-text color-white">
                <h2>{category.name}</h2>
            </div>
        </div>
    );
}
