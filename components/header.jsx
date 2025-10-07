"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Menu, X } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-200 bg-gradient-to-r from-yellow-50 via-amber-100 to-orange-50 shadow-md backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between relative">
        {/* Left: Name */}
        <div className="flex-shrink-0">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            DIANA
          </h1>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          {[
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#education", label: "Education" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-800 hover:text-yellow-600 transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Social Buttons */}
        <div className="hidden md:flex gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="icon"
            className="border-yellow-300 hover:border-yellow-500 hover:bg-yellow-100 transition"
          >
            <a
              href="https://www.facebook.com/dianarosemondero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4 text-yellow-600" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-yellow-300 hover:border-yellow-500 hover:bg-yellow-100 transition"
          >
            <a href="https://www.linkedin.com/in/diana-rose-mondero" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 text-yellow-600" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-yellow-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-gradient-to-b from-yellow-50 via-amber-100 to-orange-100 border-t border-yellow-200 animate-in fade-in slide-in-from-top-2">
          {[
            "About",
            "Experience",
            "Projects",
            "Skills",
            "Education",
            "Contact",
          ].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-gray-800 font-medium hover:text-yellow-600 transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              size="icon"
              className="border-yellow-300 hover:border-yellow-500 hover:bg-yellow-100 transition"
            >
              <a
                href="https://www.facebook.com/dianarosemondero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 text-yellow-600" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-yellow-300 hover:border-yellow-500 hover:bg-yellow-100 transition"
            >
              <a
                href="https://www.linkedin.com/in/diana-rose-mondero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 text-yellow-700" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
