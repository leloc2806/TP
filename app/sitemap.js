import flattenAttributes from './lib/utils';

async function getNewsCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-categories?populate=deep,3`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getArticleList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=deep,3`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product-categories?populate=deep,3`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export default async function sitemap() {
  try {
    const newsCategoriesList = await getNewsCategories();
    const articlesList = await getArticleList();
    const categoriesList = await getCategories();

    const newsCategories = flattenAttributes(newsCategoriesList.data);
    const articles = flattenAttributes(articlesList.data);
    const categories = flattenAttributes(categoriesList.data);

    const dynamicNewsCategoryUrls = newsCategories.map((category) => ({
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}tin-tuc/${category.slug}`,
      lastModified: new Date(category.updatedAt).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

    const dynamicArticleUrls = articles.map((article) => ({
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}tin-tuc/${article.news_categories?.data[0]?.slug || 'default'}/${article.slug}`,
      lastModified: new Date(article.updatedAt).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

    const dynamicCategoryUrls = categories.map((category) => ({
      url: `https://nhuathanhphat.vn/san-pham/${category.category?.slug || 'default'}/${category.slug}`,
      lastModified: new Date(category.updatedAt).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

    const dynamicProductUrls = categories.flatMap((category) =>
      category.products?.data.map((product) => ({
        url: `https://nhuathanhphat.vn/san-pham/${category.category?.slug || 'default'}/${category.slug}/${product.slug}`,
        lastModified: new Date(product.updatedAt).toISOString(),
        changeFrequency: 'weekly',
        priority: 0.5,
      }))
    );

    return [
      { url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.5 },
      { url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}gioi-thieu`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.5 },
      { url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}tin-tuc`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.5 },
      { url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}san-pham`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.5 },
      { url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}lien-he`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.5 },
      ...dynamicNewsCategoryUrls,
      ...dynamicArticleUrls,
      ...dynamicCategoryUrls,
      ...dynamicProductUrls,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
}
