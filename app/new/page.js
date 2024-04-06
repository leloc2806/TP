async function getNewCategory() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news-categories?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function New(){

    const articleList = await getNewCategory();

    

    return (
        <div>
            <h1>Tin tức</h1>
        </div>
    )
}