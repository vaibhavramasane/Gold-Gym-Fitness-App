"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "#about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/trainers", label: "Trainers" },
    // { href: "#pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-900/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-gold/10"
          : "bg-neutral-900/95 backdrop-blur-md md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span>
              <img src="/Hero-logo-goldgym.png" alt="GoldGym Logo" className="h-16 w-16 md:h-24 md:w-24 object-contain" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-inter text-neutral-300 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas tracking-wider hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
            >
              <Link href="/join">JOIN NOW</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold hover:text-gold-light transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t bg-neutral-900/95 backdrop-blur-md border-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-neutral-300 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas"
            >
              <Link href="/join">JOIN NOW</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
