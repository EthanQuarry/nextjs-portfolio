import { Analytics } from "@vercel/analytics/next"
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen antialiased font-sans ${inter.variable} ${newsreader.variable}`}>
        <div className="mx-auto max-w-[620px] w-full px-6 py-16 md:py-24">
          <header className="mb-14">
            <Navbar />
          </header>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
