"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, User, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path ? "text-purple-600 font-medium" : "text-gray-700 hover:text-purple-600"
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-2 rounded-lg shadow-md">
            <Heart className="h-6 w-6 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            SatisfyGain
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/charities" className={isActive("/charities")}>
            Causes
          </Link>
          <Link href="/impact" className={isActive("/impact")}>
            Impact
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/support" className={isActive("/support")}>
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-purple-600">
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="hidden md:block text-gray-700 hover:text-purple-600 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-purple-600">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          )}
          <Link
            href="/donate"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl font-medium shadow-md"
          >
            Donate Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-purple-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg z-20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className={isActive("/") + " py-2 text-base"} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/charities"
              className={isActive("/charities") + " py-2 text-base"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Causes
            </Link>
            <Link
              href="/impact"
              className={isActive("/impact") + " py-2 text-base"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              href="/about"
              className={isActive("/about") + " py-2 text-base"}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/support"
              className={isActive("/support") + " py-2 text-base"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="py-2 text-base text-gray-700 hover:text-purple-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false)
                    setMobileMenuOpen(false)
                  }}
                  className="py-2 text-left text-base text-gray-700 hover:text-purple-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className="py-2 text-base text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
