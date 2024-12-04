import type { Metadata } from "next";
import { Inter, Afacad } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

import "../globals.css";
import { TopBar } from "@/components/top-bar";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Chatbot } from "@/components/chatbot";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Floré",
  description: "As flores mais lindas na sua região.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="pt-BR">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextIntlClientProvider messages={messages}>
          <body className={`${afacad.variable} ${inter.variable} antialiased`}>
            <TopBar />
            <Header />
            {children}
            <Toaster position="bottom-center" richColors />
          </body>
          <Chatbot />
          <Footer />
        </NextIntlClientProvider>
      </ThemeProvider>
    </html>
  );
}
