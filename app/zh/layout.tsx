import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "岘港 DLG 韩式 SAKURA 官方网站 | 套餐价格·接送·微信预约",

  description:
    "岘港 DLG 韩式 SAKURA 官方网站。提供A～F套餐价格、营业时间、店内环境、位置、接送服务及微信预约信息。微信号：dananghyun。",

  keywords: [
    "岘港 DLG SAKURA",
    "岘港 SAKURA",
    "岘港韩式 SAKURA",
    "岘港按摩",
    "岘港韩式按摩",
    "岘港 SAKURA 价格",
    "岘港 SAKURA 预约",
    "岘港接送服务",
    "岘港微信预约",
    "岘港按摩预约",
  ],

  alternates: {
    canonical: "/zh",
    languages: {
      ko: "/",
      "zh-CN": "/zh",
      "x-default": "/",
    },
  },

  openGraph: {
    title: "岘港 DLG 韩式 SAKURA 官方网站",
    description:
      "查看A～F套餐价格、营业时间、位置、店内环境、接送服务及微信预约信息。",
    url: "https://danangdlgsakura.com/zh",
    siteName: "岘港 DLG 韩式 SAKURA",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/sakura-interior-1.jpg",
        width: 1200,
        height: 800,
        alt: "岘港 DLG 韩式 SAKURA 官方网站",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "岘港 DLG 韩式 SAKURA 官方网站",
    description:
      "岘港 DLG 韩式 SAKURA 套餐价格、接送服务及微信预约信息。",
    images: ["/sakura-interior-1.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}