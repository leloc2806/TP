import flattenAttributes from "@/app/lib/utils";
import ProductList from "@/app/components/product/ProductList";

// Fetch category product title data
async function getCategoryProductTitle(params) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/product-categories?populate=deep,2&filters[slug][$eq]=${params.productId}`,
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching product data:", error.message);
        throw error;
    }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
    try {
        const post = await getCategoryProductTitle(params);
        let productCat = flattenAttributes(post.data[0]);

        const metaTitle = productCat.SEO?.metaTitle || productCat.name;
        const metaDescription = productCat.SEO?.metaDescription || productCat.description;
        const metaImage = productCat.SEO?.metaImage?.url || productCat.picture?.url || '';

        return {
            title: `${metaTitle}`,
            authors: [
                {
                    name: 'admin' || "Thanh Phat"
                }
            ],
            description: metaDescription,
            keywords: productCat.SEO?.keywords || '',
            openGraph: {
                title: `${metaTitle} | Thanh Phat`,
                description: metaDescription,
                type: "website",
                url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}san-pham/${productCat.slug}`,
                publishedTime: productCat.created_at,
                authors: `admin`,
                tags: productCat.categories,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_API_URL}${metaImage}`,
                        width: 1024,
                        height: 576,
                        alt: metaTitle,
                        type: "image/jpg"
                    }
                ]
            },
            twitter: {
                card: "summary_large_image",
                site: "@thanhphat",
                creator: "@thanhphat",
                title: `${metaTitle} | thanhphat`,
                description: metaDescription,
            },
            alternates: {
                canonical: `/san-pham/${params.categoryId}/${productCat.slug}`
            }
        };
    } catch (error) {
        console.error("Error generating metadata:", error.message);
        throw error;
    }
}

// Fetch products by category
async function getProductCategory({ params, page = 1, pageSize = 9 }) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,3&filters[product_category][slug][$eq]=${params.productId}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
            { cache: 'no-store' }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching product data:", error.message);
        throw error;
    }
}

// Main component to display products by category
export default async function ProductId({ params, searchParams }) {
    const page = searchParams.page || 1;
    const pageSize = 9;

    try {
        const data = await getProductCategory({ params, page, pageSize });
        const titleCategoryProduct = await getCategoryProductTitle(params);
        const title = titleCategoryProduct.data[0].attributes.name;

        return (
            <ProductList params={params} data={data} currentPage={parseInt(page)} title={title} pageSize={pageSize} />
        );
    } catch (error) {
        console.error("Error in ProductId component:", error.message);
        return <div>Error loading products. Please try again later.</div>;
    }
}
