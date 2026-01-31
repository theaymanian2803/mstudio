import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - REMOVED OPACITY AND DARK OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/Screenshot%202026-01-31%20204348.png"
          alt="Crossfit gym background"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Subtle gradient only at bottom for text readability, keeping image bright */}
        <div className="absolute inset-0 bg-linear-to-t from-transparent via-black to-black/0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 py-1.5 px-4 text-xs tracking-[0.2em] uppercase rounded-full bg-black/80 backdrop-blur-sm">
              Est. 2026 • Marrakech
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-xl">
              COMMENCEZ AUJOURD'HUI,
              <br />
            </h1>
            <p className="text-lg md:text-xl text-white font-medium max-w-xl leading-relaxed border-l-4 border-primary pl-6 drop-shadow-md">
              Définissez vos muscles, gagnez en confiance et rejoignez une communauté qui vous
              pousse au-delà de vos limites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-none tracking-wide transition-all hover:scale-105 shadow-lg shadow-primary/25">
                COMMENCEZ VOTRE PARCOURS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white text-white bg-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold rounded-none tracking-wide backdrop-blur-sm transition-all">
                VOIR LE PLANNING
              </Button>
            </div>
          </div>

          {/* Hero Floating Card */}
          <div className="hidden lg:flex justify-end relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <div className="bg-zinc-950/80 backdrop-blur-xl p-8 max-w-sm border border-zinc-800 relative z-10 shadow-2xl group border-l-4 border-l-primary">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Trophy className="w-24 h-24 text-primary" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="h-14 w-14 bg-primary text-primary-foreground rounded-none flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="font-black text-2xl">01</span>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-lg">Définition Musculaire</h3>
                  <p className="text-primary text-xs tracking-widest uppercase">
                    Sculptez Votre Corps
                  </p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed relative z-10">
                Notre programme est conçu pour développer la masse musculaire maigre tout en
                améliorant la force fonctionnelle.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <div className="w-8 h-[2px] bg-primary"></div>
                Résultats Vérifiés
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white font-bold text-shadow">
          Défiler
        </span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </div>
  )
}

export default Hero
