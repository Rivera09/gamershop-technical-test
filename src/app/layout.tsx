import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/layout";
import { Archivo } from "next/font/google";
import "./globals.css";

const roboto = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`text-primary ${roboto.className}`}>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
