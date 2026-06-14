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

const SITE_DESCRIPTION =
  "Junior Grizzlies Football develops young athletes through tackle football, 7v7, winter camps, summer camps, competitive play, and skill-specific training in Lincoln, Nebraska.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jrgriz.vercel.app"),
  title: "JR Griz Football — Year-Round Football Development | Lincoln, NE",
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "JR Griz Football",
    title: "JR Griz Football — Year-Round Football Development",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Junior Grizzlies Football — Lincoln, Nebraska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JR Griz Football — Year-Round Football Development",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${archivo.variable} ${anton.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
