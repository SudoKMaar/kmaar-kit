import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Chivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";
import BlindContextProvider from "@/lib/blind-context-provider";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});
const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/en-US",
    },
  },
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
    <html lang="en" className="scroll-smooth bg-background">
      <body className={rubik.variable + " " + chivo.variable}>
        <BlindContextProvider>
          <Navbar />
          <section className="flex justify-between max-h-screen gap-4 pl-4 mx-auto max-w-[1786px]">
            <Sidebar />
            <main
              id="mainContent"
              className="flex flex-col justify-between w-full max-w-screen-2xl py-8 pt-20 mx-auto overflow-auto"
            >
              {children}
              <Footer />
            </main>
            <ScrollToTop />
          </section>
          <Toaster richColors />
        </BlindContextProvider>
      </body>
    </html>
  );
}
