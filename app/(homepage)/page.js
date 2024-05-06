import SlideHome from "../components/home/homeSlide";
import Link from "next/link";
import SectionComponent from "@/app/components/sectionComponent";
import SlidePartner from "../components/home/partnerSlide";
import flattenAttributes from "../lib/utils"
import Image from 'next/image';
import Markdown from 'react-markdown';
import CollectionBox from "@/app/components/product/productCollectionBox"


async function getCategories() {
  try{
      const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=deep,3`
      );
      if (!res.ok) {
          throw new Error("Failed to fetch data");
      }
      return res.json();
  }
  catch(error){
      // Handle errors here, such as logging or displaying an error message
      console.error("Error fetching slider data:", error.message);
      throw error; // Re-throw the error to be handled by the caller if needed
  }
}

async function getArticleList(){
  try{
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3`
  
    )
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

async function fetchHomePage() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate=deep,3`
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

export default async function Home() {
  
  const data = await fetchHomePage();
  const dataChange = flattenAttributes(data);
  const dataCategories = await getCategories();
  const articleList = await getArticleList();
  const slideData = dataChange.TopSlider;
  const aboutData = dataChange.ParallaxBlock;
  const categories = flattenAttributes(dataCategories);
  const articles = flattenAttributes(articleList);

  return (
    <div 
      className="relative m-0 w-full h-auto p-0"
      
    >
        <div className="relative m-0 overflow-hidden" id="home-page">
          <SectionComponent 
            className="home-banner relative" 
            translate={"translateX(-200px)"}
          >
            <SlideHome slides={slideData}/>
          </SectionComponent>
          <SectionComponent 
          
            className="home-intro relative"
            translate={"translateY(200px)"}>
            <div className="pic-home-intro">
              <div className="bg-cover">
                <Image 
                  loading="lazy" 
                  src={`${process.env.NEXT_PUBLIC_API_URL}${aboutData.ParallaxImage.url}`}
                  alt={aboutData.LeftText} 
                  width={200} 
                  height={200}
                />
              </div>
            </div>

            <div className="text-home-intro">
              <div className="title-big text-ani-item color-blue">
                  <div className="text-inner-ani">
                    <h2 className="text-title-about block">{aboutData.LeftText}</h2>
                  </div>
              </div>
              <div className="box-txt color-blue ani-item on-show">
                  <div className="text-inner">
                    <Markdown>{aboutData.RightContent}</Markdown>
                  </div>
                  <div className="ani-view-details">
                      <Link
                          className="view-details dark sticky-button detect-on-view is-inview relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-[4rem] h-[4rem]"
                          href="/about"
                          replace
                      >
                          <svg className="w_100 h_100" viewBox="0 0 80 80">
                              <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                              <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                          </svg>
                          <div className="view_i"></div>
                          <span className="o_h"><span>{aboutData.ButtonText}</span></span>     
                      </Link>
                  </div>
              </div>
            </div>
          </SectionComponent>
          <SectionComponent 
            className="home-commercial relative"
            translate={"translateY(-200px)"}>
            <div className="flex flex-wrap w-full h-auto m-auto justify-start z-10 relative">
              {categories.data.map((category) => (
                <CollectionBox category={category} key={category.id}/>
              ))}
            </div>
          </SectionComponent>
          <SectionComponent 
            className="home-news relative"
            translate={"translateX(200px)"}>
            <div className="wrap-content">
              <div className="left-content">
                <div className="title-big text-ani-item color-blue">
                  <div className="text-inner-ani">
                    <h2 className="text-title-about block">đang diễn ra</h2>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="news-list-home ani-item on-show">
                  {articles.data.filter((article, idx) => idx < 3).map((article) => (
                    <div className="item-news-home" key={article.id}>
                      <div className="pic-news-home">
                        <div className="pic-img">
                          <Image 
                            loading="lazy" 
                            src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail.url}`} 
                            alt={article.title}
                            width={1000} 
                            height={1000}
                          />
                        </div>
                      </div>
                      <div className="txt-news-home">
                        <h3>{article.title}</h3>
                      </div>
                      <a 
                        className="link-load" 
                        aria-label="view" 
                        href={`/news/${article.slug}`}>

                      </a>
                    </div>  
                  ))}  
                </div>
              </div>  
              <div className="ani-view-details">
                <Link
                    className="view-details dark sticky-button detect-on-view is-inview relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-[5rem] h-[5rem]"
                    href="/news"
                >
                    <svg className="w_100 h_100" viewBox="0 0 80 80">
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                    </svg>
                    <div className="view_i"></div>
                    <span className="o_h"><span>Xem them</span></span>     
                </Link>
              </div>  
          </div>
          </SectionComponent>
          <SectionComponent 
            className="home-partner relative"
            translate={"translateX(-200px)"}>
            <SlidePartner/>
          </SectionComponent>
        </div>
    </div>
  );
}
