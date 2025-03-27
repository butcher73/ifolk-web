"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-coral-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">i</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">iFolk</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-coral-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-coral-500 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-coral-500 transition-colors">
              Services
            </Link>
            <Link href="#events" className="text-gray-700 hover:text-coral-500 transition-colors">
              Events
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-coral-500 transition-colors">
              Contact
            </Link>
            <Button className="bg-coral-500 hover:bg-coral-600 text-white">Connect</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-coral-500 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coral-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coral-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coral-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coral-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coral-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">Connect</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

