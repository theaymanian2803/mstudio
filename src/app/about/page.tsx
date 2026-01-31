'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Users, ShieldCheck, Trophy, ArrowRight, Dumbbell, Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* --- Hero Section --- */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop"
            alt="Gym Community"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
            <Badge
              variant="outline"
              className="border-primary text-primary tracking-[0.2em] uppercase bg-primary/5 px-4 py-1">
              Notre Histoire
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Plus Qu'une <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Salle de Sport
              </span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-6">
              Fondé à Marrakech en 2026, CrossFitMatter est né d'une ambition simple : créer un
              espace où la performance rencontre la communauté. Ici, chaque goutte de sueur raconte
              une histoire de résilience.
            </p>
          </div>
        </div>
      </div>

      {/* --- Mission Section --- */}
      <div className="bg-zinc-950 py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Notre <span className="text-primary">Mission</span>
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Nous croyons que le fitness n'est pas une destination, mais un mode de vie. Notre
                  mission est de forger des athlètes complets, capables de relever n'importe quel
                  défi physique ou mental.
                </p>
                <p>
                  Que vous soyez un athlète d'élite ou que vous n'ayez jamais touché une barre de
                  votre vie, notre programmation est conçue pour s'adapter à vous. Nous ne nous
                  contentons pas de vous entraîner ; nous vous éduquons sur le mouvement, la
                  nutrition et la récupération.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h3 className="text-4xl font-black text-white">500+</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">
                    Membres Actifs
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white">1200m²</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">
                    Espace d'Entraînement
                  </p>
                </div>
              </div>
            </div>

            {/* Image Composition */}
            <div className="relative h-[600px] w-full hidden md:block group">
              {/* Main Image */}
              <div className="absolute right-0 top-0 w-4/5 h-4/5 border border-zinc-800 z-10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                  alt="Athlete focus"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Secondary Image */}
              <div className="absolute left-0 bottom-0 w-3/5 h-3/5 border-4 border-black z-20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                  alt="Weights"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Box */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-primary/20 -z-0 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Values Section --- */}
      <div className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05),transparent_70%)]"></div>

        <div className="container relative z-10 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Nos Valeurs</h2>
            <p className="text-zinc-400">
              Ce qui nous définit, ce qui nous pousse, et ce qui nous rassemble chaque jour à la
              box.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                desc: "Nous ne visons pas la perfection, mais nous exigeons l'effort. Chaque répétition compte, chaque détail importe.",
                icon: Target,
              },
              {
                title: 'Communauté',
                desc: "On commence ensemble, on finit ensemble. Personne n'est laissé pour compte, quel que soit son niveau.",
                icon: Users,
              },
              {
                title: 'Intégrité',
                desc: "Honnêteté dans l'effort. Pas de raccourcis. Les vrais résultats viennent du travail acharné et de la constance.",
                icon: ShieldCheck,
              },
            ].map((val, idx) => (
              <Card
                key={idx}
                className="bg-zinc-900/50 border-zinc-800 hover:border-primary transition-all duration-300 group">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                    <val.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-4">{val.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* --- The Facility Section --- */}
      <div className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1 grid grid-cols-2 gap-2">
              <div className="h-64 bg-zinc-900 relative rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540497077202-7c8a33801524?q=80&w=1470&auto=format&fit=crop"
                  alt="Equipment"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="h-64 bg-zinc-900 relative rounded-sm overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop"
                  alt="Gym floor"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="flex-1 order-1 md:order-2 space-y-6">
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-300 tracking-wider uppercase px-3 py-1">
                L'Équipement
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
                Conçu Pour <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                  La Performance
                </span>
              </h2>
              <p className="text-zinc-400 text-lg">
                Nous n'avons fait aucun compromis sur la qualité. Notre box est équipée du meilleur
                matériel du marché pour garantir votre sécurité et optimiser vos performances.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  'Barres & Poids Olympiques Rogue',
                  'Cardio Concept2 (Rameurs, SkiErgs)',
                  'Cage de Gymnastique 15m',
                  'Espace Mobilité Dédié',
                  'Douches & Vestiaires Premium',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="uppercase font-bold text-sm tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="container px-4 py-24 mx-auto text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 drop-shadow-xl">
          Rejoignez <br /> Le Mouvement
        </h2>
        <p className="text-xl text-zinc-300 mb-10 max-w-xl mx-auto">
          Venez voir par vous-même. La première séance est offerte, sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-primary text-black hover:bg-primary/90 rounded-none w-full sm:w-auto shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-105 transition-transform">
              Réserver Ma Séance
            </Button>
          </Link>
          <Link href="/classes">
            <Button
              variant="outline"
              className="h-16 px-12 text-lg font-black uppercase tracking-widest border-zinc-700 text-white hover:bg-white hover:text-black rounded-none w-full sm:w-auto">
              Voir les Programmes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
