"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Outreach", href: "#outreach" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Chapters", href: "#chapters" },
  { name: "Blog", href: "#blog" },
  { name: "Join Us", href: "#join-us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 right-4 z-40 bg-dark-900/80 backdrop-blur-sm border border-dark-400 rounded-lg">
      <div className="px-3 py-2">
        <div className="flex items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1"
                >
                  Menu <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 bg-black border-dark-400 animate-in fade-in-80 slide-in-from-top-2"
                align="end" // aligned to right
              >
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    className="text-gray-300 hover:bg-dark-700 focus:bg-dark-700 focus:text-white cursor-pointer"
                  >
                    <a href={item.href} className="w-full">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 border-t border-dark-400 bg-black animate-in fade-in-80 slide-in-from-top-2 rounded-b-lg">
            <div className="flex flex-col space-y-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
