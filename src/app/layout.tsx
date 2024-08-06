import { Inter } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { constructMetadata } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <MaxWidthWrapper className="flex flex-col items-center justify-between py-24 w-full max-w-2xl">
          <header className="text-center mb-6">
            <Navbar />
          </header>
          {children}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}