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

const CTASection = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/IMG_0112.jpeg"
          alt="Gym ropes background"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Lighter overlay to let color show through */}
        <div className="absolute inset-0 bg-zinc-950/70" />
      </div>

      <div className="relative z-10 container text-center px-4">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 drop-shadow-2xl">
          Prêt à <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-pulse">
            Redéfinir
          </span>{' '}
          Vos Limites ?
        </h2>
        <p className="text-xl text-zinc-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
          N'attendez pas le moment parfait. Créez-le. Rejoignez la communauté la plus forte de la
          ville.
        </p>
        <Link href="/contact">
          <Button className="h-16 px-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-black tracking-widest rounded-none uppercase transition-transform hover:scale-105 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            Essai Gratuit
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default CTASection
