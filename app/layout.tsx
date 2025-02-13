import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoryCarrer",
  description: "StoryCareer is a unique platform where individuals from all walks of life can share their stories, challenges, and successes.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black.svg",
        href: "/favicon-black.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-white.svg",
        href: "/favicon-white.svg"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
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
