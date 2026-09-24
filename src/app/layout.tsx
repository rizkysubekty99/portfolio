import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Rizky Subekty | Application Support Engineer, Full-Stack Developer & AI Automation",
  description: "Application Support Engineer and Full-Stack Developer focused on application support, web development, AI automation, APIs, databases, and modern digital solutions.",
  keywords: [
    "Rizky Subekty",
    "Application Support Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "AI Automation",
    "Go Developer",
    "Next.js Developer",
    "PostgreSQL",
    "Indonesia",
  ],
  authors: [{ name: "Rizky Subekty" }],
  openGraph: {
    title: "Rizky Subekty | Application Support Engineer & Full-Stack Developer",
    description: "Application Support Engineer and Full-Stack Developer focused on application support, web development, AI automation, APIs, databases, and modern digital solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky Subekty | Application Support Engineer & Full-Stack Developer",
    description: "Application Support Engineer and Full-Stack Developer focused on application support, web development, AI automation, APIs, databases, and modern digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
