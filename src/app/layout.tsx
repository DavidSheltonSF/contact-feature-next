import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/navbar";


export const metadata: Metadata = {
  title: "Contact us",
  description: "If you are facing any issues, please, contact us, and we will reply soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
