"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-br">
        <header>
          <title>Stone Currency</title>
        </header>
        <body className={roboto.className}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
}
