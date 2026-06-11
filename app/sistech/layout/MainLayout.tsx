"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { cn } from "@/app/lib/utils";
import { IoClose } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const navItems = [
  { title: "Menu", to: "/sistech/menu" },
  { title: "About Us", to: "/sistech/about-us" },
  { title: "Promo", to: "/sistech/promo" },
];

const NavItem = ({
  to,
  children,
  onClick,
  isMobile = false,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      onClick={onClick}
      className={cn(
        "font-bold transition-colors duration-200",
        isMobile ? "block text-sm py-2" : "text-sm",
        isActive ? "text-primary" : "text-gray-700 hover:text-primary/75",
      )}
    >
      {children}
    </Link>
  );
};

export default function MainLayout({
   children,
}: {
  children: ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 shadow-sm bg-white">
        <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* logo sistech */}
          <Link href="/sistech/home">
            <span className="text-primary font-extrabold text-xl tracking-wide">
              SISTECH CAFE
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavItem key={item.title} to={item.to}>
                {item.title}
              </NavItem>
            ))}
            <Link
              href="/sistech/login"
              className="bg-primary hover:bg-primary/75 text-white text-sm font-bold px-5 py-2 rounded-xl transition-colors"
            >
              Login
            </Link>
          </div>

          {/* icon hamburger */}
          <button
            className="md:hidden cursor-pointer p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* sidebar mobile */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 cursor-pointer text-gray-500 hover:text-red-500 bg-gray-50 rounded-full transition-colors"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavItem to={item.to} isMobile onClick={() => setIsMobileMenuOpen(false)}>
                  {item.title}
                </NavItem>
              </li>
            ))}
            <li>
              <Link
                href="/sistech/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-primary text-white text-sm font-bold px-5 py-2 rounded-xl text-center"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* content */}
      <main className="">{children}</main>

      {/* footer */}
      <footer className="bg-primary py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-white text-2xl">
            <a href="https://www.instagram.com/ristek.csui/" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
              <FaInstagram />
            </a>
            <a href="https://x.com/RistekCSUI" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:opacity-75 transition-opacity">
              <FaWhatsapp />
            </a>
          </div>
          <p className="text-white text-sm font-medium">
            Made with Love by <span className="font-bold">Nabila Andriani</span>
          </p>
        </div>
      </footer>
    </>
  );
}