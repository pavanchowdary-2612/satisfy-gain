import Link from "next/link"
import { Heart, Mail, Phone, Twitter, Instagram, Facebook, Linkedin, Globe } from "lucide-react"
import { TrustBadgeGroup } from "./TrustBadge"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white pt-16 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-2 rounded-lg shadow-md">
                <Heart className="h-8 w-8 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold text-white">SatisfyGain</span>
            </div>
            <p className="text-purple-200 mb-6">Empowering change through transparent giving</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-purple-200 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-purple-200 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-purple-200 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-purple-200 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-purple-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/charities" className="text-purple-200 hover:text-white transition-colors">
                  Causes
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-purple-200 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-purple-200 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-purple-200 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-pink-300" /> help@satisfygain.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-pink-300" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-pink-300" /> Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800/50 pt-8 pb-6 text-center">
          <TrustBadgeGroup theme="dark" className="mb-6" />
          <p>© 2024 SatisfyGain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
