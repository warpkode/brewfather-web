import type { Metadata } from "next";
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
  title: "Brewfather - Tools for your brewing needs",
  description: "Powerful and easy to use tool for your brewing needs",
  metadataBase: new URL('https://brewfather.app'),
  openGraph: {
    title: "Brewfather",
    description: "Powerful and easy to use tool for your brewing needs",
    url: "https://brewfather.app",
    siteName: "Brewfather",
    images: [
      {
        url: "/images/logo_full.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
