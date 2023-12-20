import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FilteredUnitsProvider } from "./context/FilteredUnitsContext";

const gotham = localFont({
  src: [
    {
      path: "../assets/fonts/gotham-light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/fonts/gotham-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham-bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/gotham-black.woff2",
      weight: "900",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Smart Fit",
  description: "Smartfit Frontend Challenge",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={gotham.className}>
        <FilteredUnitsProvider>{children}</FilteredUnitsProvider>
      </body>
    </html>
  );
}
