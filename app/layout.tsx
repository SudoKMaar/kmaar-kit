import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: {
    default: "KMaar Kit",
    template: "%s - KMaar Kit",
  },
  description:
    "Unlock the Power of Code with KMaar Kit: Your Ultimate Developer Resource Hub. Discover tutorials, tools, and expert insights for mastering programming, design, and more.",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
