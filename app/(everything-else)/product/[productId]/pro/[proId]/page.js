import TitlePage from "@/app/components/titlepage";
import flattenAttributes from "@/app/lib/utils";
import Markdown from 'react-markdown';
import { MotionDiv } from "@/app/components/MotionDiv";

async function getProductDetail({params}){
    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=deep,2&filters[slug][$eq]=${params.proId}`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }
    catch(error){
        // Handle errors here, such as logging or displaying an error message
        console.error("Error fetching product data:", error.message);
        throw error; // Re-throw the error to be handled by the caller if needed
    }
}

function getObjectFromSingleElementArray(array) {
    // Check if the input is an array and has exactly one element
    if (Array.isArray(array) && array.length === 1) {
      // Return the first (and only) element of the array
      return array[0];
    } else {
      // If the input is not an array or doesn't have exactly one element, return null or handle the error as needed
      return null;
    }
}

export default async function Pro({params}){

    const pro = await getProductDetail({params});
    const product = flattenAttributes(pro.data);
    const productDetail = getObjectFromSingleElementArray(product)

    return (
        <>
            <TitlePage title={productDetail.title}/>
            <div className="load-content relative margin mt-[-1px] ml-0 mb-0 overflow-hidden w-full h-auto p-0">
                <div className="load-details m-0 p-0 z-10 text-[var(--color-black)]">
                    <div className="wrap-content w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10 flex">
                        <div class="block w-1/2">
                            <img class="w-auto lazyloaded" src="https://moderndoor.vn/wp-content/uploads/2024/01/cua-nhua-composite-5c-D3-MD.06-23.jpg"/>
                        </div>
                        <div class="lg:w-[540px] w-1/2">
                            <div class="rounded-xl p-4 lg:p-8 flex justify-between bg-primary/10">
                                <div class="text-secondary font-medium text-3xl lg:text-4xl">
                                    Liên hệ                            
                                </div>
                                <div class="flex gap-4 items-center"></div>
                            </div>
                            <div class="mt-5">
                                <span class="font-medium text-secondary">Danh mục: </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}