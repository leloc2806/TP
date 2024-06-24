import { Suspense } from "react";

export const metadata = {
  title: "Danh mục sản phẩm",
  description: "Công ty Cổ phần Năng lượng Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
  keywords: ["Thành Phát", "nhựa thành phát", "nhuathanhphat", "nhựa composite", "sản phẩm nhựa", "cửa nhựa", "cửa", "sàn", "trần", "nhà máy", "nhựa", "sản xuất", "nhập khẩu"],
  openGraph: {
      url: "https://nhuathanhphat.vn/",
      type: "website",
      title: "Công ty Cổ phần Năng lượng Thành Phát",
      description: "Công ty Cổ phần Năng lượng Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
  },
  twitter: {
      card: "summary_large_image",
      title: "Công ty Cổ phần Năng lượng Thành Phát",
      description: "Công ty Cổ phần Năng lượng Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
      creator: "@thanhphat",
      site: "@thanhphat",
  },
  alternates: {
      canonical: `/san-pham`,
  },
};

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}


export default function CategoryLayout({ children }) {
  return(
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>

  );
}