import NewTab from "@/app/components/news/new-tab";
import Image from 'next/image';
import Link from 'next/link';
import TitlePage from "@/app/components/titlepage";
import { MotionDiv } from "@/app/components/MotionDiv";
import NewComboBox from "@/app/components/news/new-combobox";


async function getTitleNewPage(){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/new-page?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getArticleList(){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3`,{ cache: 'no-store' }

    )
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getNewCategory() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news-categories?populate=deep,3`, { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

function FeatureNew({data}){

    const featureItem = data;
    const featureUrl = featureItem.attributes.thumbnail.data.attributes.url

    return (
        <div className="feature-new relative">
            <div className="w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-xl z-10 py-[5vw] max-[1100px]:pt-[60px] px-0">
                <div className="title-post relative inline-block w-auto mx-0 mt-0 mb-8 h-auto text-[var(--bgactive)]">
                    <h2 className="inline-block relative font-normal text-titleMedium">Nổi bật</h2>
                </div>
                <Link href={`/news/${featureItem.attributes.slug}`} className="relative flex flex-row-reverse w-full mt-[-100px] mb-0 mx-0 p-0 cursor-pointer feateured-item">
                    <div className="pic-news w-1/2 relative">
                        <div className="pic-img p-0 h-full relative block w-full overflow-hidden">
                            <Image
                                className="absolute w-full h-full top-0 left-0 object-cover object-center pointer-events-none block" 
                                src={`${process.env.NEXT_PUBLIC_API_URL}${featureUrl}`}
                                width={800} 
                                height={450}
                                alt={featureItem.attributes.title}
                            />
                        </div>
                    </div>
                    <div className="txt-news w-1/2 pt-28 pr-20 pb-0 pl-0 relative text-[var(--bgactive)]">
                        <div className="date-thumb relative h-auto my-[15px] mx-0 text-[var(--color-black40)] font-medium text-xs text-left">by admin | Mar 25, 2024</div>
                        <h3 className="text-[var(--color-black80) text-3xl relative font-normal mb-4 mx-0 mt-0 line-clamp-2">
                            {featureItem.attributes.title}
                        </h3>
                        <p className="line-clamp-3">Từ quyết tâm thực hiện chủ trương phát triển nhà ở xã hội thời gian qua của lãnh đạo Thành phố Hồ Chí Minh cho thấy, kết quả khả quan, nhiều đối tượng chính sách xã hội đã tạo lập được chỗ ở ổn định, bảo đảm an sinh, an tâm làm việc, góp phần cải thiện, nâng cao đời sống nhân dân trên địa bàn thành phố. Tuy nhiên, những rào cản về quy hoạch, thủ tục đầu tư, chính sách vay vốn... phát sinh từ thực tế cũng đã tác động không nhỏ đến hiệu quả đầu tư các dự án, dẫn đến kết quả xây dựng, phát triển nhà ở xã hội đạt rất thấp so với chỉ tiêu kế hoạch mà chính quyền thành phố đề ra.</p>
                        <div className="view-more relative inline-block my-8 mx-0">
                            <span 
                                className="link-load relative flex py-[5px] px-0 items-center font-bold text-sm uppercase my-0 mr-5 ml-0 text-[var(--color-black30)]"
                            >
                                Xem thêm
                            </span>
                        </div>
                    </div>
                </Link>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
            </div>
        </div>
    )
}

export default async function News(){
    const titlePage = await getTitleNewPage();
    const articlesList = await getArticleList();
    const categoriesList = await getNewCategory();

    const title = titlePage.data.attributes.Title;
    const articleList = articlesList.data;
    const featureItem = articleList[articleList.length - 1]
    const categoryList = categoriesList.data;

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"   
            transition={{
                delay: 1,
                ease: "easeInOut",
                duration: 0.5,
            }}
            className="relative m-0">
                <TitlePage title={title} />
                <FeatureNew data={featureItem} />
                <NewTab data={[articleList, categoryList]}/>
                <NewComboBox data={[articleList, categoryList]}/>
        </MotionDiv>
    )
}