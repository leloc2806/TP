export const metadata = {
    title: "Tin tức",
    description:
      "Tin tuc",
      keywords: ["Thành Phát", "nhựa thành phát", "nhuathanhphat", "nhựa composite", "sản phẩm nhựa", "cửa nhựa", "cửa", "sàn", "trần", "nhà máy", "nhựa", "sản xuất", "nhập khẩu"],
      openGraph: {
        url: "https://nhuathanhphat.vn/",
        type: "article",
        title: "Công ty Cổ phần Năng lượng Thành Phát",
        description:
          "Công ty Cổ phần Năng lượng Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
      },
      twitter: {
        card: "summary_large_image",
        title: "Công ty Cổ phần Năng lượng Thành Phát",
        description:
          "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
        creator: "@thanhphat",
        site: "@thanhphat",
      },
      alternates: {
        canonical: `/tin-tuc`
      }
  };
export default function NewsLayout({ children }) {
  return <>{children}</>;
}