import CategoryProductTab from "@/app/components/CategoryProductTab";



async function getTitle() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product-category-page?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getCategories() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Product(){

    const titlePage = await getTitle();
    const categoryList = await getCategories();

    const title = titlePage.data.attributes.Title
    const categories = categoryList.data;

    return(
        <div className="relative m-0 category-product-page">
            <div className="title-page block relative h-auto w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                <div className="relative block w-full h-auto overflow-hidden">
                    <h1 className="text-[6vw] font-normal relative block">{title}</h1>
                </div>   
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
            </div>

            <div className="section-outernav">
                <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                    <div className="sub-nav">
                        <CategoryProductTab categories={categories}/>
                    </div> 
                </div>
            </div>

        </div>
    )
}