import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://craftedwithdiv.com"),
  alternates: {
    canonical: "https://craftedwithdiv.com",
  },
  title: "Senior Front-End Developer | Divya Vispute Portfolio & Expertisr",
  description:
    "Explore Divya's portfolio as a Senior Front-End Developer with over 4.7 years of experience in creating high-performance, user-focused web applications. Skilled in React, JavaScript, HTML5, CSS3, and more.",
  keywords:
    "Senior Front-End Developer, Front-End Developer, React Developer, JavaScript Developer, HTML5, CSS3, Web Developer, User-Centric Design, Responsive Web Design, UI/UX, JavaScript, Web Applications, Portfolio",
  openGraph: {
    locale: "en_US",
    siteName: "Divya Vispute",
    type: "website",
    title: "Divya Vispute",
    description:
      "Divya Vispute is a Web developer.",
    url: "https://craftedwithdiv.com",
    images: [
      {
        url: "./woman.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divya Vispute",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
