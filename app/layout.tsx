import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

const noto = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Dashboard Companies",
  description: "Is a dashboard for managing companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${noto.variable} ${noto.variable} antialiased`}>
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
