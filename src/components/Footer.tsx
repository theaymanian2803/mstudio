import React from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Dumbbell,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Calendar,
  Filter,
  User,
} from 'lucide-react'
function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Dumbbell className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
              <span className="font-extrabold text-2xl tracking-tighter">
                CROSSFIT
                <span className="text-primary group-hover:text-white transition-colors">
                  MATTER
                </span>
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Forging elite fitness through community, coaching, and proven programming.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-5 w-5 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-primary">
              Programs
            </h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">CrossFit</li>
              <li className="hover:text-white cursor-pointer transition-colors">Weightlifting</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gymnastics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-primary">
              Company
            </h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Coaches</li>
              <li className="hover:text-white cursor-pointer transition-colors">Schedule</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-primary">
              Visit Us
            </h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <span>
                  123 Fitness Blvd,
                  <br />
                  Marrakesh, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <span>Mon - Fri: 6am - 9pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-zinc-900 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs uppercase tracking-wider">
          <p>&copy; 2026 CrossFitMatter. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
