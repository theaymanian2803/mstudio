import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

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

const Offerings = () => {
  const offerings = [
    {
      title: 'ATHLÈTE',
      desc: 'Programmation avancée pour le fitness compétitif, conçue pour repousser vos limites.',
      icon: Trophy,
      image: 'https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/IMG_0104.jpeg',
    },
    {
      title: 'SPORT & GAINAGE',
      desc: 'Cours fondamentaux axés sur la forme, la stabilité et la force du tronc.',
      icon: Activity,
      image: 'https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/IMG_0110.jpeg',
    },
    {
      title: 'RÉCUPÉRATION',
      desc: 'Séances de mobilité et de yoga pour garder votre corps souple et sans blessure.',
      icon: Zap,
      image: 'https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/IMG_0111.jpeg',
    },
  ]

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-4">
            NOS PROGRAMMES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Ce Que Nous Offrons
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Un entraînement complet adapté à vos besoins et objectifs spécifiques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offer, idx) => (
            <Card
              key={idx}
              className="bg-zinc-950 border-zinc-800 overflow-hidden group hover:border-primary/50 transition-all duration-500 rounded-none relative">
              <div className="h-72 overflow-hidden relative">
                {/* Image - REMOVED GRAYSCALE, MIX-BLEND MODES */}
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />

                {/* Gradient only for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                  <offer.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-3xl font-black text-white italic uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {offer.title}
                  </h3>
                  <div className="h-1 w-12 bg-primary mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-zinc-400 mb-6 leading-relaxed">{offer.desc}</p>
                <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors cursor-pointer">
                  Voir le Programme{' '}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
