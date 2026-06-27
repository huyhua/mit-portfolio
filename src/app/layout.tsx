import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hua-vuong-duy-binh-portfolio.vercel.app"),
  title: "Hứa Vương Duy Bình | Portfolio",
  description:
    "Portfolio của Hứa Vương Duy Bình, chuyên viên quản trị kế hoạch, phân tích dữ liệu và điều phối hoạt động tại Đà Nẵng.",
  openGraph: {
    title: "Hứa Vương Duy Bình | Portfolio",
    description:
      "Chuyên viên quản trị kế hoạch, phân tích dữ liệu, theo dõi BSC/KPIs và điều phối triển khai dự án chuyển đổi số.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/portrait.jpg",
        width: 900,
        height: 814,
        alt: "Hứa Vương Duy Bình",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
