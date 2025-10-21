import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brewfather - Powerful Brewing Software for Recipe Design & Batch Tracking",
  description: "The best brewing software for homebrewers and professionals. Design recipes, track batches, manage inventory, and integrate with popular brewing devices. Free to start!",
  keywords: ["brewing software", "homebrewing", "recipe designer", "batch tracking", "brew day", "beer recipe", "inventory management", "Tilt hydrometer", "iSpindel", "brewing app"],
  authors: [{ name: "Brewfather" }],
  creator: "Brewfather",
  publisher: "Brewfather",
  metadataBase: new URL('https://brewfather.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Brewfather - Powerful Brewing Software for Recipe Design & Batch Tracking",
    description: "The best brewing software for homebrewers and professionals. Design recipes, track batches, manage inventory, and integrate with popular brewing devices.",
    url: "https://brewfather.app",
    siteName: "Brewfather",
    images: [
      {
        url: "https://brewfather.app/images/logo_full.png",
        width: 1200,
        height: 630,
        alt: "Brewfather - Brewing Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brewfather - Powerful Brewing Software",
    description: "The best brewing software for homebrewers. Design recipes, track batches, and integrate with popular devices.",
    images: ["https://brewfather.app/images/logo_full.png"],
    creator: "@brewfatherapp",
    site: "@brewfatherapp",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7cb342" },
    { media: "(prefers-color-scheme: dark)", color: "#30323d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-82138724-1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-82138724-1');
            gtag('config', 'AW-813109824');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '2140129852931712');
            fbq('set','agent','tmgoogletagmanager', '2140129852931712');
            fbq('track', "PageView");
          `}
        </Script>

        {/* Tolt Analytics */}
        <Script src="https://cdn.tolt.io/tolt.js" data-tolt="34643ec0-13b3-432d-b9a7-f036030cca1e" strategy="afterInteractive" />

        {/* Intercom Chat Integration */}
        <Script id="intercom-settings" strategy="afterInteractive">
          {`
            window.intercomSettings = {
              app_id: "yg64y5xn"
            };
          `}
        </Script>
        <Script id="intercom-widget" strategy="afterInteractive">
          {`
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/yg64y5xn';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `}
        </Script>
      </body>
    </html>
  );
}
