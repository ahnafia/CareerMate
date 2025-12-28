import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Pivot Analyzer",
  description: "Analyze your resume and discover your best career transition opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white font-sans">
        {children}
      </body>
    </html>
  );
}
