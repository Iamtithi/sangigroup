import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Noto_Naskh_Arabic, Noto_Sans_SC } from 'next/font/google';

const notoNaskhArabic = Noto_Naskh_Arabic({ 
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic'
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-chinese'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${notoNaskhArabic.variable} ${notoSansSC.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Read the user's saved language preference
                  var saved = '';
                  var cookies = document.cookie.split('; ');
                  for (var i = 0; i < cookies.length; i++) {
                    var parts = cookies[i].split('=');
                    if (parts[0] === 'selectedLanguage') {
                      saved = decodeURIComponent(parts[1]);
                      break;
                    }
                  }

                  // Map label → Google Translate code
                  var langMap = { 'English': 'en', 'Chinese': 'zh-CN', 'Arabic': 'ar' };
                  var code = langMap[saved] || 'en'; // default to English if nothing saved

                  // Build the googtrans value
                  var value = '/en/' + code;

                  // Cookie flags
                  var secure = location.protocol === 'https:' ? '; SameSite=None; Secure' : '';

                  // Clear any old googtrans cookies first
                  var hostname = location.hostname;
                  var parts = hostname.split('.');
                  var root = parts.length > 2 ? parts.slice(-2).join('.') : hostname;
                  var expired = '; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
                  document.cookie = 'googtrans=' + expired + secure;
                  document.cookie = 'googtrans=' + expired + '; domain=' + hostname + secure;
                  if (root !== hostname) {
                    document.cookie = 'googtrans=' + expired + '; domain=.' + root + secure;
                  }

                  // Write the correct googtrans cookie
                  var maxAge = '; path=/; max-age=31536000';
                  document.cookie = 'googtrans=' + value + maxAge + secure;
                  if (root !== hostname) {
                    document.cookie = 'googtrans=' + value + maxAge + '; domain=.' + root + secure;
                  }

                  // Apply RTL direction if Arabic
                  if (code === 'ar') {
                    document.documentElement.setAttribute('dir', 'rtl');
                  } else {
                    document.documentElement.setAttribute('dir', 'ltr');
                  }

                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}