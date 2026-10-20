import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://zeba-portfolio-phi.vercel.app"),

  title: "Zeba Afreen | Software Engineer & ML Developer",

  description:
    "Portfolio of Zeba Afreen, M.S. Computer Science student at Rutgers University. Explore projects in software engineering, machine learning, and data-driven applications.",

  openGraph: {
    title: "Zeba Afreen | Software Engineering & Machine Learning",
    description:
      "Explore my software engineering and machine learning projects, from brain tumor segmentation to full-stack development.",
    url: "https://zeba-portfolio-phi.vercel.app/",
    siteName: "Zeba Afreen Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeba Afreen — Software Engineering and Machine Learning Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
