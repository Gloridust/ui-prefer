import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "软件风格预览工具 - 熵析云枢网络科技",
  description: "专业的 UI 风格预览工具，帮助客户直观地挑选和预览不同的 UI 设计方案，支持多种设计风格和配色方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
