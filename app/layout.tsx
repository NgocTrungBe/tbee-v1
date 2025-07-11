import { Fira_Code, Inter } from "next/font/google";
import "@/styles/globals.scss";
import LayoutWrapper from "@/components/LayoutWrapper";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fira-code",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ngoc Trung Be",
  description:
    "Front-End Developer portfolio with real-world projects and clean UI/UX.",
  keywords: [
    "Front-End",
    "React",
    "Next.js",
    "Portfolio",
    "Developer",
    "Ngoc Trung Be",
  ],
  authors: [{ name: "Ngoc Trung Be" }],
  creator: "Ngoc Trung Be",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ngoc Trung Be",
    description: "Showcasing projects built with React, Next.js, Tailwind CSS.",
    url: "https://www.bengoctrung.com/",
    siteName: "Ngoc Trung Be Portfolio",
    images: [
      {
        url: "https://www.bengoctrung.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ngoc Trung Be Portfolio Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngoc Trung Be",
    description: "See my portfolio built with React & Next.js",
    creator: "Ngoc Trung Be",
    images: ["https://www.bengoctrung.com/og-image.jpg"],
  },
  metadataBase: new URL("https://www.bengoctrung.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} ${inter.className} antialiased`}>
        <LayoutWrapper> {children}</LayoutWrapper>
      </body>
    </html>
  );
}
