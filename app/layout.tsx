import type { Metadata } from "next";
import { Bebas_Neue, Saira_Condensed, Inter, Lora } from "next/font/google";
import "./globals.css";



const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
   weight: "400",
  subsets: ["latin"],
});

const saira = Saira_Condensed({
  variable: "--font-saira",
   weight: "800",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: "800",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ROOTS",
  description: "this is my portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` ${bebas.variable} ${saira.variable} ${inter.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
