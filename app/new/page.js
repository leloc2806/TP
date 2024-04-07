import NewTab from "../components/new-tab";
import Image from 'next/image';
import Link from 'next/link';

async function getTitleNewPage(){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/new?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getArticleList(){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3`

    )
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

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
    const titlePage = await getTitleNewPage();
    const articlesList = await getArticleList();
    const categoryList = await getNewCategory();

    const title = titlePage.data.attributes.Title;
    const articleList = articlesList.data;
    const featureItem = articleList[articleList.length - 1]
    console.log(featureItem.attributes)

    return (
        <div className="relative m-0">
            <div className="title-page block relative h-auto w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                <div className="relative block w-full h-auto overflow-hidden">
                    <h1 className="text-[6vw] font-normal relative block">{title}</h1>
                </div>   
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
            </div>

            <div className="feature-new relative">
                <div className="w-[80vw] mx-auto font-normal text-xl z-10 py-[5vw] px-0">
                    <div className="title-post relative inline-block w-auto mx-0 mt-0 mb-8 h-auto text-[var(--bgactive)]">
                        <h2 className="inline-block relative font-normal text-titleMedium">Feature</h2>
                    </div>
                    <div className="item-news relative flex flex-row-reverse w-full mt-[-100px] mb-0 mx-0 p-0 cursor-pointer">
                        <div className="pic-news w-1/2 relative">
                            <div className="pic-img p-0 h-full relative block w-full overflow-hidden">
                                <img
                                    className="absolute w-full h-full top-0 left-0 object-cover object-center pointer-events-none block" 
                                    src={`https://www.nhojsc.vn/pictures/catalog/news/32024/z528266878191061286f45fdb80a5185aa9d16b28a3d65.jpg`}
                                    width={800}
                                    height={450}
                                />
                            </div>
                        </div>
                        <div className="txt-news w-1/2 pt-28 pr-20 pb-0 pl-0 relative text-[var(--bgactive)]">
                            <div className="date-thumb relative h-auto my-[15px] mx-0 text-[var(--color-black40)] font-medium text-xs text-left">by admin | Mar 25, 2024</div>
                            <h3 className="text-[var(--color-black80) text-3xl relative font-normal mb-4 mx-0 mt-0 line-clamp-2">
                            Vận dụng cơ chế đặc thù, ưu tiên phát triển nhà ở xã hội
                            </h3>
                            <p className="line-clamp-3">Từ quyết tâm thực hiện chủ trương phát triển nhà ở xã hội thời gian qua của lãnh đạo Thành phố Hồ Chí Minh cho thấy, kết quả khả quan, nhiều đối tượng chính sách xã hội đã tạo lập được chỗ ở ổn định, bảo đảm an sinh, an tâm làm việc, góp phần cải thiện, nâng cao đời sống nhân dân trên địa bàn thành phố. Tuy nhiên, những rào cản về quy hoạch, thủ tục đầu tư, chính sách vay vốn... phát sinh từ thực tế cũng đã tác động không nhỏ đến hiệu quả đầu tư các dự án, dẫn đến kết quả xây dựng, phát triển nhà ở xã hội đạt rất thấp so với chỉ tiêu kế hoạch mà chính quyền thành phố đề ra.</p>
                            <div className="view-more relative inline-block my-8 mx-0">
                                <Link href='/' className="link-load relative flex py-20 px-0 items-center font-bold text-sm uppercase my-0 mr-5 ml-0 text-[var(--color-black30)]">
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-outernav">
                <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                    <div className="sub-nav">
                        {/* <NewTab data={articleList}/> */}
                    </div> 
                    
                </div>
            </div>

        </div>
    )
}