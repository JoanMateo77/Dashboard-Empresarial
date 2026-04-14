import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site";

import { ClerkProvider } from '@clerk/nextjs';

const noto = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["dashboard", "admin", "companies", "crm", "next.js"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>  
        <body className={`${noto.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
          
          {children}
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
