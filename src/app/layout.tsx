import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = { title: "Rizky Subekty | Universal Full-Stack Engineer | AI & System Integration", 
  description: "Portfolio website of Rizky Subekty, a professional Full-Stack Engineer specializing in building modern, scalable, and reliable web applications.", 
  keywords: [ "Rizky Subekty", "Full-Stack Engineer", "Full-Stack Developer", "Software Engineer", "Web Developer", "Backend Developer", "Frontend Developer", ], 
  authors: [{ name: "Rizky Subekty" }], };

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
