import TitlePage from "@/app/components/titlepage";
import flattenAttributes from "@/app/lib/utils";

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

            
        </>
    )
}