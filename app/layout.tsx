import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danangdlgsakura.com"),

  title: {
    default: "다낭 DLG 한인 사쿠라 공식 홈페이지 | 코스 가격·예약",
    template: "%s | 다낭 DLG 한인 사쿠라",
  },

  description:
    "다낭 DLG 한인 사쿠라 공식 홈페이지입니다. A~F 코스 가격, 영업시간, 위치, 내부 시설, 픽업 서비스 및 카카오톡 예약 정보를 확인하세요.",

  keywords: [
    "다낭 DLG 사쿠라",
    "다낭 한인 사쿠라",
    "다낭 사쿠라",
    "DLG 사쿠라",
    "다낭 사쿠라 공식 홈페이지",
    "다낭 사쿠라 가격",
    "다낭 사쿠라 예약",
    "다낭 마사지",
    "다낭 마사지 예약",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "다낭 DLG 한인 사쿠라 공식 홈페이지",
    description:
      "A~F 코스 가격, 영업시간, 위치, 내부 시설, 픽업 서비스 및 예약 정보를 확인하세요.",
    url: "https://danangdlgsakura.com",
    siteName: "다낭 DLG 한인 사쿠라",
    locale: "ko_KR",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}