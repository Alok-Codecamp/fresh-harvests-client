import type { Metadata } from "next";
import { Geist_Mono,Rubik } from "next/font/google";
import "./globals.css";
import Providers from "@/lib";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});



export const metadata: Metadata = {
  title: "Fresh harvests",
  description: "Fresh Harvests delivers farm-fresh vegetables straight to your doorstep! Buy organic, locally sourced produce with ease. Enjoy fast delivery, seasonal picks, and healthy eating made simple. Order now for the freshest veggies in town! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
