import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content="Horizon Medical Center provides gentle, modern dentistry in Seeb. We offer a full range of services from general check-ups to cosmetic dentistry and implants." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                    serif: ['"Playfair Display"', 'serif'],
                  },
                  colors: {
                    'brand-teal': {
                      DEFAULT: '#008080',
                      light: '#00A0A0',
                    },
                    'brand-gold': {
                      DEFAULT: '#c59d5f',
                      dark: '#b38d54',
                    },
                    'brand-dark': '#222222',
                    'brand-whatsapp': {
                      DEFAULT: '#25D366',
                      dark: '#128C7E',
                    },
                  },
                  keyframes: {
                    'fade-in-down': {
                      '0%': { opacity: '0', transform: 'translateY(-20px)' },
                      '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    'fade-in-up': {
                      '0%': { opacity: '0', transform: 'translateY(20px)' },
                      '100%': { opacity: '1', transform: 'translateY(0)' },
                    }
                  },
                  animation: {
                    'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
                    'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                  }
                },
              },
            }
          `}
        </Script>
         <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: 'Inter', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
               .animation-delay-300 {
                animation-delay: 300ms;
              }
              .animation-delay-600 {
                animation-delay: 600ms;
              }
              @keyframes fade-in-down {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in-down {
                animation: fade-in-down 0.6s ease-out forwards;
                opacity: 0;
              }
              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
                opacity: 0;
              }
            `,
          }}
        />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
