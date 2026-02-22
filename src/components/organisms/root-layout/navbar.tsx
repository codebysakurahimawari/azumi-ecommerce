"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About Us" },
]

const ACCOUNT_LINKS = [
  { href: "/profile", label: "Profile" },
  { href: "/orders", label: "Orders" },
]

const iconStyle =
  "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"

function IconButton({ children, onClick, className = "" }: any) {
  return (
    <button onClick={onClick} className={`p-1 ${className}`}>
      {children}
    </button>
  )
}

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const accountRef = useRef<HTMLDivElement>(null)
  const user = { name: "John" }
  const cartCount = 2

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  // Close account dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/site-logo.svg"
            alt="Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-8 uppercase font-semibold text-gray-700 dark:text-gray-300 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black dark:hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 ">
          <IconButton>
            <Search size={20} className={iconStyle} />
          </IconButton>

          <IconButton onClick={() => setDark(!dark)}>
            {dark ? <Sun size={20} className={iconStyle} /> : <Moon size={20} className={iconStyle} />}
          </IconButton>

          <Link href="/wishlist" className="hidden md:flex">
            <Heart size={20} className={iconStyle} />
          </Link>

          <div className="relative">
            <ShoppingCart size={20} className={iconStyle} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 text-xs rounded-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
                {cartCount}
              </span>
            )}
          </div>

          {/* Account Dropdown (Desktop) */}
          <div ref={accountRef} className="relative hidden md:block">
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center gap-2 text-sm font-light tracking-wide text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
            >
              <User size={20} />
              {user.name}
            </button>

            {accountOpen && (
              <div className="absolute right-0 mt-2 w-44 border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-xl py-2 z-50">
                {ACCOUNT_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-800 my-2" />
                <button
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                  onClick={() => console.log("Logout")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden">
            <IconButton onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} className={iconStyle} />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Side Panel */}
        <div className="relative bg-white dark:bg-zinc-900 w-64 h-full p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/site-logo.svg"
                alt="Logo"
                width={120}
                height={34}
                className="object-contain"
                priority
              />
            </Link>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <X size={24} className={iconStyle} />
            </IconButton>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-2 text-gray-700 dark:text-gray-300 font-medium uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 hover:text-black dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

          {/* Wishlist / Cart */}
          <Link
            href="/wishlist"
            className="py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Wishlist
          </Link>
          <Link
            href="/cart"
            className="py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cart ({cartCount})
          </Link>

          <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

          {/* Account Links */}
          {ACCOUNT_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="py-2 text-red-500 hover:text-red-600 text-left"
            onClick={() => console.log("Logout")}
          >
            Logout
          </button>

          {/* Dark Mode toggle */}
          <button
            className="mt-auto py-2 flex items-center gap-2 text-gray-700 dark:text-gray-300"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </header>
  )
}