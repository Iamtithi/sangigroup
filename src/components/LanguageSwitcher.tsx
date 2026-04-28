'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (config: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
          }, elementId: string): void;
          InlineLayout: { SIMPLE: number };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: 'Chinese' },
  { code: 'ar', label: 'Arabic' },
];

function getRootDomain(): string {
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) return hostname;
  const parts = hostname.split('.');
  return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
}

function writeGoogTrans(value: string) {
  const secure = window.location.protocol === 'https:' ? '; SameSite=None; Secure' : '';
  const root = getRootDomain();
  const base = `googtrans=${value}; path=/; max-age=31536000${secure}`;
  document.cookie = base;
  if (root !== window.location.hostname) {
    document.cookie = `${base}; domain=.${root}`;
  }
}

function clearGoogTrans() {
  const secure = window.location.protocol === 'https:' ? '; SameSite=None; Secure' : '';
  const root = getRootDomain();
  ['', window.location.hostname, `.${root}`].forEach((domain) => {
    const d = domain ? `; domain=${domain}` : '';
    document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC${d}${secure}`;
  });
}

function getSavedLang() {
  try {
    const raw = document.cookie.split('; ').find((c) => c.startsWith('selectedLanguage='))?.split('=')[1];
    if (raw) {
      const found = LANGUAGES.find((l) => l.label === decodeURIComponent(raw));
      if (found) return found;
    }
  } catch {}
  return LANGUAGES[0];
}

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Hide Google Translate UI
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame, .goog-te-menu-frame, .skiptranslate,
      #google_translate_element, .goog-te-balloon-frame,
      .goog-logo-link, .goog-te-gadget span, #goog-gt-tt,
      .goog-tooltip, .goog-te-spinner-pos, .goog-te-spinner,
      .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
      .VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc,
      .goog-te-gadget-icon { display: none !important; }
      body { top: 0 !important; }
    `;
    document.head.appendChild(style);

    const saved = getSavedLang();
    setCurrentLang(saved.label);

    // Reinforce the cookie (blocking script in layout already set it,
    // this is a safety net)
    clearGoogTrans();
    writeGoogTrans(`/en/${saved.code}`);

    document.documentElement.setAttribute('dir', saved.code === 'ar' ? 'rtl' : 'ltr');

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,zh-CN,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const translatePage = (code: string, label: string) => {
    setIsOpen(false);
    setCurrentLang(label);
    document.cookie = `selectedLanguage=${encodeURIComponent(label)}; path=/; max-age=31536000`;
    document.documentElement.setAttribute('dir', code === 'ar' ? 'rtl' : 'ltr');
    clearGoogTrans();
    writeGoogTrans(`/en/${code}`);
    setTimeout(() => window.location.reload(), 150);
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="notranslate flex items-center gap-1 px-2 py-1.5 text-xs border border-gray-300 rounded-md hover:bg-gray-50 transition bg-white"
        >
          <span className="notranslate">{currentLang}</span>
          <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden" style={{ zIndex: 99999 }}>
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => translatePage(code, label)}
                className={`notranslate block w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 transition ${
                  currentLang === label ? 'bg-blue-50 text-blue-700 font-semibold' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}