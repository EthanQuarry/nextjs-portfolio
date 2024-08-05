import { Inter } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { constructMetadata } from "@/lib/utils";

export const inter = Inter({ subsets: ["latin"] });

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
        <MaxWidthWrapper>
          {children}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}