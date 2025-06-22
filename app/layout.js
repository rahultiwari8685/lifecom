// app/layout.js
import "./globals.css";            // your Tailwind or global resets
import Script from "next/script";

export const metadata = {
  title: "LIFECOM PHARMACEUTICALS (I) PRIVATE LIMITED",
  description: "World-class healthcare solution provider.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* meta / favicon */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/assets/logo-1.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;700;900&family=Inter:wght@300;600&display=swap"
          rel="stylesheet"
        />

        {/* local CSS served from /public/assets/css/ */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/icomoon.css" />
        <link rel="stylesheet" href="/assets/css/flexslider.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/scss/elements/theme-css.css" />
        <link
          id="creote-color-switcher-css"
          rel="stylesheet"
          href="/assets/css/scss/elements/color-switcher/color.css"
        />
        <link rel="stylesheet" href="/assets/css/woocommerce-layout.css" />
        <link rel="stylesheet" href="/assets/css/woocommerce.css" />
      </head>

      <body className="theme-creote">
        {children}



        {/* JS bundles – load after page is interactive */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/creote-extension.js" strategy="afterInteractive" />
        {/* …add the rest the same way… */}

        {/* Google Maps */}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/gmaps.js" strategy="afterInteractive" />
        <Script src="/assets/js/map-helper.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
