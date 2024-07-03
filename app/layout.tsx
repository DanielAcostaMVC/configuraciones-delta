
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Marco } from "@/context";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sinco Delta",
  description: "Sinco Delta-ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Script src="/load.js" strategy="beforeInteractive" />
      <Marco>
        {children}
      </Marco>
      </body>
    </html>
  );
}
