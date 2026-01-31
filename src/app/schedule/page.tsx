'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

// --- Mock Data ---
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const scheduleData = [
  {
    day: 'Monday',
    classes: [
      { name: 'Low Intensity', time: '07:00 - 08:30', trainer: 'Michael Dem', intensity: 'Low' },
      { name: 'High Intensity', time: '09:30 - 11:00', trainer: 'Sarah Connor', intensity: 'High' },
      { name: 'Beginners', time: '13:30 - 14:30', trainer: 'Michael Dem', intensity: 'Low' },
      { name: 'Form & Tech', time: '18:30 - 19:30', trainer: 'John Doe', intensity: 'Med' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { name: 'Beginners', time: '07:00 - 08:30', trainer: 'Michael Dem', intensity: 'Low' },
      { name: 'CrossFit Open', time: '09:30 - 11:00', trainer: 'Alex Smith', intensity: 'High' },
      { name: 'Mobility', time: '13:30 - 14:30', trainer: 'Jessica Woo', intensity: 'Low' },
      { name: 'High Intensity', time: '19:30 - 21:00', trainer: 'Michael Dem', intensity: 'High' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { name: 'Cardio Blast', time: '06:00 - 07:00', trainer: 'Sarah Connor', intensity: 'High' },
      { name: 'Form & Tech', time: '09:30 - 11:00', trainer: 'Michael Dem', intensity: 'Med' },
      { name: 'Low Intensity', time: '17:00 - 18:30', trainer: 'John Doe', intensity: 'Low' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { name: 'Beginners', time: '07:00 - 08:30', trainer: 'Michael Dem', intensity: 'Low' },
      { name: 'High Intensity', time: '09:30 - 11:00', trainer: 'Alex Smith', intensity: 'High' },
      { name: 'Gymnastics', time: '18:30 - 20:00', trainer: 'Jessica Woo', intensity: 'Med' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { name: 'Low Intensity', time: '07:00 - 08:30', trainer: 'Michael Dem', intensity: 'Low' },
      { name: 'Team WOD', time: '17:30 - 19:00', trainer: 'All Coaches', intensity: 'High' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      {
        name: 'Weekend Warrior',
        time: '09:00 - 11:00',
        trainer: 'Sarah Connor',
        intensity: 'High',
      },
      { name: 'Open Gym', time: '11:00 - 14:00', trainer: 'Staff', intensity: 'Low' },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      { name: 'Rest & Recovery', time: '10:00 - 11:30', trainer: 'Jessica Woo', intensity: 'Low' },
    ],
  },
]

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'CLASSES', path: '/classes' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'TEAM', path: '/team' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
              <Dumbbell className="h-6 w-6" />
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-white">
              CROSSFIT
              <span className="text-primary group-hover:text-primary/80 transition-colors">
                MATTER
              </span>
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors ${link.name === 'SCHEDULE' ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>
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
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <div className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
          alt="Schedule header"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
      </div>
      <div className="container relative z-10 text-center px-4">
        <Badge
          variant="outline"
          className="mb-4 border-primary text-primary tracking-[0.2em] uppercase bg-primary/5">
          Timetable
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
          Classes{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            Schedule
          </span>
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Find your fit. Join a class that suits your goals and schedule.
        </p>
      </div>
    </div>
  )
}

const ClassCard = ({
  session,
}: {
  session: { name: string; time: string; trainer: string; intensity: string }
}) => {
  // Determine border color based on intensity for a nice visual cue
  const borderColor =
    session.intensity === 'High'
      ? 'border-primary'
      : session.intensity === 'Med'
        ? 'border-zinc-500'
        : 'border-zinc-800'

  return (
    <div
      className={cn(
        'group relative flex flex-col p-5 bg-zinc-900/50 border-l-4 hover:bg-zinc-900 transition-all duration-300',
        borderColor
      )}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-bold text-primary flex items-center gap-1">
          <Clock className="w-3 h-3" /> {session.time}
        </span>
        <Badge
          className={cn(
            'text-[10px] px-1.5 py-0 h-5 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
          )}>
          {session.intensity}
        </Badge>
      </div>
      <h3 className="text-xl font-black text-white uppercase mb-1 group-hover:text-primary transition-colors">
        {session.name}
      </h3>
      <div className="flex items-center gap-2 mt-auto pt-3 border-t border-zinc-800/50">
        <User className="w-3 h-3 text-zinc-500" />
        <span className="text-xs text-zinc-500 uppercase tracking-wide">{session.trainer}</span>
      </div>

      {/* Hover Action */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  )
}

const ScheduleGrid = () => {
  const [activeDay, setActiveDay] = useState('Monday')

  return (
    <section className="bg-black text-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View: Full Grid */}
        <div className="hidden lg:grid grid-cols-7 gap-px bg-zinc-800 border border-zinc-800 mb-12">
          {days.map((day) => (
            <div
              key={day}
              className="bg-zinc-950 p-4 text-center font-bold text-lg uppercase tracking-wider text-zinc-300 border-b-2 border-transparent hover:border-primary transition-colors">
              {day}
            </div>
          ))}

          {/* We map days to columns. This assumes a fixed row height logic or simplified vertical stacking per day for responsiveness in this grid layout */}
          {days.map((day) => {
            const dayData = scheduleData.find((d) => d.day === day)
            return (
              <div key={`col-${day}`} className="bg-black min-h-[400px] flex flex-col gap-2 p-2">
                {dayData?.classes.map((session, idx) => (
                  <ClassCard key={idx} session={session} />
                ))}
                {(!dayData?.classes || dayData.classes.length === 0) && (
                  <div className="flex-1 flex items-center justify-center text-zinc-800 text-sm font-medium uppercase tracking-widest rotate-90 lg:rotate-0">
                    Rest Day
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile/Tablet View: Tabs */}
        <div className="lg:hidden">
          <Tabs defaultValue="Monday" className="w-full" onValueChange={setActiveDay}>
            <TabsList className="w-full h-auto flex flex-wrap justify-start gap-2 bg-transparent mb-8 p-0">
              {days.map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  className="rounded-none border border-zinc-800 bg-zinc-900 text-zinc-400 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary uppercase font-bold tracking-wider flex-grow sm:flex-grow-0 py-3">
                  {day.slice(0, 3)}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent
                key={day}
                value={day}
                className="mt-0 animate-in fade-in slide-in-from-left-4 duration-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl font-black uppercase text-white">{day}</h2>
                    <div className="h-[1px] flex-1 bg-zinc-800"></div>
                  </div>

                  {scheduleData
                    .find((d) => d.day === day)
                    ?.classes.map((session, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-primary transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3 mb-1">
                            <Badge
                              variant="outline"
                              className="border-primary text-primary text-[10px] uppercase">
                              {session.time}
                            </Badge>
                            <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                              {session.intensity} Intensity
                            </span>
                          </div>
                          <h3 className="text-2xl font-black uppercase text-white">
                            {session.name}
                          </h3>
                          <p className="text-sm text-zinc-400">
                            Trainer: <span className="text-white">{session.trainer}</span>
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="shrink-0 border-zinc-700 hover:border-primary hover:text-primary hover:bg-transparent uppercase font-bold text-xs tracking-widest rounded-none">
                          Book Class
                        </Button>
                      </div>
                    ))}

                  {!scheduleData.find((d) => d.day === day)?.classes?.length && (
                    <div className="py-12 text-center border border-dashed border-zinc-800 rounded-sm">
                      <p className="text-zinc-500">
                        No classes scheduled for {day}. Time for recovery!
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

const CTAFooter = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight">
          Can't find a time?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          We offer private personal training sessions tailored to your schedule.
        </p>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-zinc-800 border-none font-bold uppercase tracking-widest rounded-none h-14 px-8">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Header />
      <ScheduleGrid />
      <CTAFooter />
    </div>
  )
}
