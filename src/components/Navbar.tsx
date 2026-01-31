'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'CLASSES', path: '/classe' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'TEAM', path: '/team' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Removed bg-primary here to fix the green background */}
            <div className="w-13 h-13 flex items-center justify-center transition-transform group-hover:rotate-12">
              <Image
                src="https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/logo.png"
                width={60}
                height={60}
                alt="Crossfit Matter Logo"
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-white">
              CROSSFIT
              <span className="text-primary group-hover:text-primary/80 transition-colors ml-1">
                MATTER
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-zinc-300 hover:text-primary px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 rounded-none uppercase tracking-wider">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-primary focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-zinc-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3 pb-3">
              <Button className="w-full bg-primary text-primary-foreground font-bold rounded-none">
                JOIN NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
