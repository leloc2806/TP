export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://blogging-leloc2806s-projects.vercel.app/sitemap.xml',
    }
  }