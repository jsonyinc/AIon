import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AION",
  description: "AI로 혁신하는 비즈니스 미래",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
