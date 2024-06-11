import SectionComponent from "@/app/components/sectionComponent";
import TitlePage from "@/app/components/titlepage";
import flattenAttributes from "@/app/lib/utils";
import Link from "next/link";

export const metadata = {
    title: "Dự Án | Nhựa Thành Phát",
    description: "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
    keywords: ["cửa nhựa", "cửa", "sàn", "trần", "nhà máy", "nhựa", "sản xuất", "nhập khẩu"],
    openGraph: {
        url: "https://nhuathanhphat.vn/",
        type: "website",
        title: "Nhựa Thành Phát",
        description: "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nhựa Thành Phát",
        description: "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
        creator: "@thanhphat",
        site: "@thanhphat",
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_API_ENDPOINT}du-an`,
    },
};


export default async function Contact() {

    return (
        <div className="relative m-0 contact-page">
            <SectionComponent className="section-title-page" translate={"translateY(200px)"}>
                <div className="wrap-content">
                    <TitlePage title={'Dự án'} />
                </div>
            </SectionComponent>

        </div>
    );
}
