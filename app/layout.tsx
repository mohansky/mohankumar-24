import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { options } from "@/.velite";
import Footer from "@/components/layout/footer";
import Menu from "@/components/layout/menu";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.woff2",
  display: "swap",
  weight: "100 300 400 500 700 900",
  variable: "--font-montserrat",
});

const roboto = localFont({
  src: "./fonts/Roboto-Regular.woff2",
  display: "swap",
  weight: "100 300 400 500 700 900",
  variable: "--font-roboto",
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "ThemeColorEnum",
};

export const metadata: Metadata = {
  title: `${options.title}`,
  description: `${options.description}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${options.keywords}`,
  authors: [{ name: "Mohan Kumar", url: "/" }],
  creator: "Mohan Kumar",
  publisher: "Mohan Kumar",
  metadataBase: new URL(`${options.basepath}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Home | ${options.title}`,
    description: `${options.description}`,
    authors: ["Mohan"],
    images: "/images/micon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth scroll-mt-10 ${montserrat.variable} ${roboto.variable} antialiased`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
