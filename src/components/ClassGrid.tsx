import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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

// --- Classes Grid ---
const ClassesGrid = () => {
  const classes = [
    {
      title: 'HAUTE INTENSITÉ',
      time: '45 MIN',
      level: 'AVANCÉ',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop',
    },
    {
      title: 'FAIBLE INTENSITÉ',
      time: '60 MIN',
      level: 'TOUS NIVEAUX',
      img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'FORME & TECHNIQUE',
      time: '90 MIN',
      level: 'DÉBUTANT',
      img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop',
    },
    {
      title: 'GUERRIER DU WEEK-END',
      time: '120 MIN',
      level: 'INTERMÉDIAIRE',
      img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1374&auto=format&fit=crop',
    },
  ]

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
              Nos Cours
            </h2>
            <p className="text-zinc-500">Trouvez le cours qui correspond à votre intensité.</p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-zinc-700 bg-transparent text-white hover:bg-primary hover:text-primary-foreground hover:border-primary mt-4 md:mt-0 rounded-none uppercase tracking-widest text-xs font-bold px-8 transition-all">
            Planning Complet
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-zinc-900 border border-zinc-800">
          {classes.map((cls, idx) => (
            <div key={idx} className="relative group h-[500px] overflow-hidden bg-black">
              {/* Image - REMOVED GRAYSCALE AND OPACITY DAMPENING */}
              <Image
                src={cls.img}
                alt={cls.title}
                fill
                className="object-cover transition-all duration-700"
                unoptimized
              />
              {/* Gradient for text, but keeping image clear */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <Badge className="bg-primary text-primary-foreground font-bold text-[10px] hover:bg-primary/90">
                    {cls.time}
                  </Badge>
                  <span className="text-xs font-bold text-primary tracking-wider bg-black/50 px-2 py-1">
                    {cls.level}
                  </span>
                </div>
                <h3 className="text-3xl font-black uppercase mb-2 leading-none text-white">
                  {cls.title}
                </h3>
                <div className="h-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
                  <p className="text-xs text-zinc-300 flex items-center gap-2 mt-4 font-bold tracking-widest uppercase cursor-pointer hover:text-white">
                    Lire Plus <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            variant="outline"
            className="w-full border-zinc-700 bg-transparent text-white hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs font-bold py-6">
            Voir Tout Le Planning
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ClassesGrid
