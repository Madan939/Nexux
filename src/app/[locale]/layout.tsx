import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "../../i18n/routing";
import React from "react";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import "../globals.css";
import LenisScrollBehavior from "@/src/components/shared/LenisScrollBehavior";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import WhatsAppWidget from "@/src/components/shared/layout/WhatsAppWidget";
import { Toaster } from "sonner";
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
const outfit = Outfit({
  subsets: ["latin"], // include other subsets if needed
  weight: ["400", "500", "700"], // choose the weights you want
  display: "swap", // optional: ensures text is displayed while font loads
});
export const metadata: Metadata = {
  title: "Nexux Labs | Innovative Web Solutions",
  description:
    "Nexux Labs is a passionate team building modern web experiences, crafting scalable and user-friendly digital solutions for businesses and individuals.",
    authors: [
    { name: "Madan Golay Tamang" },
    { name: "Sagar Pariyar" },
    { name: "Deepesh Sunuwar" },
  ],
    alternates: {
    canonical: "https://www.nexuxlabs.com",
  },
  openGraph: {
    title: "Nexux Labs | Innovative Web Solutions",
    description:
      "Nexux Labs is a passionate team building modern web experiences, crafting scalable and user-friendly digital solutions for businesses and individuals.",
    siteName: "Nexux Labs",
    images: [
      {
        url: "https://www.nexuxlabs.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexux Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexux Labs | Innovative Web Solutions",
    description:
      "Nexux Labs is a passionate team building modern web experiences, crafting scalable and user-friendly digital solutions for businesses and individuals.",
    images: ["https://www.nexuxlabs.com/images/og-image.png"],
  },
};

// Define the namespaces explicitly (strong typing)
const namespaces = [
  "landing",
  "about",
  "common",
  "services",
  "team",
  "career",
  "contact",
  "blogs",
] as const;
type Namespace = (typeof namespaces)[number];

// Map each namespace to its messages
type NamespaceMessages = Record<Namespace, AbstractIntlMessages>;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load all namespaces with proper types
  const messages: NamespaceMessages = {} as NamespaceMessages;

  for (const ns of namespaces) {
    try {
      const nsModule = await import(`../../../messages/${locale}/${ns}.json`);
      messages[ns] = nsModule.default;
    } catch {
      messages[ns] = {};
    }
  }

  return (
    <html lang={locale} className={outfit.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisScrollBehavior>
            <Header />
            {children}
            <Footer />
          </LenisScrollBehavior>
          <Toaster richColors position="top-right" />
        </NextIntlClientProvider>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
