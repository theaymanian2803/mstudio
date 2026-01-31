'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  Dumbbell,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Activity,
  Flame,
  Zap,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import Offerings from '@/components/Offerings'
import ClassesGrid from '@/components/ClassGrid'
import CTASection from '@/components/CTASection'

// --- Main Page Assembly ---
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <IntroSection />
      <Offerings />
      <ClassesGrid />
      <CTASection />
    </div>
  )
}
