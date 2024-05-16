import CategoryProductTab from "@/app/components/product/CategoryProductTab";
import CategoryProductComboBox from "@/app/components/product/CategoryProductComboBox";



async function getTitle() {
    try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product-category-page?populate=deep,3`, { cache: 'no-store' }
        );
    
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
    
        return res.json();
    } catch (error) {
        // Handle errors here, such as logging or displaying an error message
        console.error("Error fetching slider data:", error.message);
        throw error; // Re-throw the error to be handled by the caller if needed
    }
}

async function getCategories() {
    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=deep,3`, { cache: 'no-store' }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }
    catch(error){
        // Handle errors here, such as logging or displaying an error message
        console.error("Error fetching data:", error.message);
        throw error; // Re-throw the error to be handled by the caller if needed
    }
}

export default async function Product(){

    const titlePage = await getTitle();
    const categoryList = await getCategories();

    const title = titlePage.data.attributes.Title
    const categories = categoryList.data;

    return(
        <div className="relative m-0 category-product-page">
            <div className="title-page block relative h-auto w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                <div className="relative block w-full h-auto overflow-hidden">
                    <h1 className="text-[6vw] font-normal relative block">{title}</h1>
                </div>   
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
            </div>

            <div className="section-outernav">
                <div className="outer-nav min-h-[80vh] max-[1100px]:w-[90vw] w-[var(--wrapcontent)] mx-auto font-normal text-xl">
                    <div className="sub-nav desktop-tab">
                        <CategoryProductTab categories={categories}/>
                    </div> 
                    <div className="sub-nav mobile-tab">
                        <CategoryProductComboBox categories={categories}/>
                    </div> 
                </div>
            </div>

        </div>
    )
}