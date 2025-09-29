import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asterboy",
  description: "Meet Asterboy, the first memecoin on Aster via Perp DEX",
  icons: {
    icon: "/images/boy.jpg", // default
    shortcut: "/images/boy.jpg", // optional
    apple: "/images/boy.jpg", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
