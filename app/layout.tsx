import type { Metadata } from "next";
import { Saira_Condensed, Archivo, Anton } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-saira",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JR Griz Football — Year-Round Football Development | Lincoln, NE",
  description:
    "Junior Grizzlies Football develops young athletes through tackle football, 7v7, winter camps, summer camps, competitive play, and skill-specific training in Lincoln, Nebraska.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${archivo.variable} ${anton.variable}`}>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
