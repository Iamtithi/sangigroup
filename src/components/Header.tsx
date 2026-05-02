"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const services = [
  { href: "/services/san-motors", name: "SAN Motor's Limited" },
  { href: "/services/sangi-trade", name: "SANGi Trade International" },
  { href: "/services/sangi-properties", name: "SANGi Properties & Development" },
  { href: "/services/san-safety-footwear", name: "San Safety Footwear Industries" },
  { href: "/services/central-shariah-board", name: "Central Shariah Board of SANGi Group" },
  { href: "/services/global-care-foundation", name: "SAN Global Care Foundation" },
];

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { text: "Services", dropdown: services },
  { href: "/contact", text: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const isServiceActive = () => {
    return pathname.startsWith("/services");
  };

  const activeClass =
    "text-blue-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-700 after:content-['']";


  return (
    <header
      className="top-0 z-50 sticky bg-white shadow-sm"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      <nav
        className="
          flex items-center justify-between py-4
          mx-[10px] md:mx-[15px] lg:mx-[20px]       /* align with poster edges */
        "
      >
        {/* ---------- Logo (aligned to poster left edge) ---------- */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
        >
          <Image
            src="/Logo 27.png"
            alt="Sangi Group Logo"
            width={150}
            height={50}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* ---------- Center Navigation Links ---------- */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-10 text-base font-semibold">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.text} className="relative group">
                <button
                  className={`
                    relative flex items-center gap-1 px-3 py-2
                    transition-colors cursor-pointer
                    ${isServiceActive() ? activeClass : "text-gray-900 hover:text-blue-700"}
                  `}
                >
                  {link.text}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown */}
                <ul
                  className="
                    invisible opacity-0
                    group-hover:visible group-hover:opacity-100
                    transition-all duration-200
                    absolute left-0 mt-2 w-64
                    bg-white border border-gray-200 shadow-lg
                    rounded-md overflow-hidden z-20
                  "
                >
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`
                          block px-4 py-2 text-sm transition-colors cursor-pointer
                          ${
                            isActive(item.href)
                              ? "text-blue-700 bg-gray-50 font-semibold"
                              : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className={`
                    relative px-3 py-2 transition-colors cursor-pointer
                    ${isActive(link.href) ? activeClass : "text-gray-900 hover:text-blue-700"}
                  `}
                >
                  {link.text}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* ---------- Language Switcher & Get in Touch ---------- */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button
              size="sm"
              className="
                bg-amber-400 text-black hover:bg-amber-500
                font-semibold text-base cursor-pointer
              "
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* ---------- Mobile Language Switcher & Toggle ---------- */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ---------- Mobile Menu (Slide-in) ---------- */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Drawer */}
        <nav
          className={`
            absolute top-0 right-0 h-full w-64 bg-white shadow-xl
            transform transition-transform duration-300
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="cursor-pointer"
            >
              <svg
                className="h-8 w-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-4 px-6 text-base font-semibold">
            {navLinks.map((link) =>
              link.dropdown ? (
                <details key={link.text} className="group">
                  <summary className={`
                    cursor-pointer px-2 py-2 flex items-center justify-between rounded transition
                    ${
                      isServiceActive()
                        ? "text-blue-700 font-semibold bg-gray-100"
                        : "text-gray-800 hover:text-blue-700"
                    }
                  `}>
                    {link.text}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <ul className="ml-3 mt-2 border-l border-gray-200 pl-3 space-y-2">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`
                            block py-1 text-sm transition
                            ${
                              isActive(item.href)
                                ? "text-blue-700 font-semibold"
                                : "text-gray-600 hover:text-blue-700"
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-2 py-2 rounded transition
                      ${
                        isActive(link.href)
                          ? "text-blue-700 font-semibold bg-gray-100"
                          : "text-gray-800 hover:text-blue-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="sm"
                  className="w-full bg-amber-400 text-black hover:bg-amber-500 mt-4 font-semibold cursor-pointer"
                >
                  Get in Touch
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}