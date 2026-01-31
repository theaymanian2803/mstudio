'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Dumbbell,
  Timer,
  Zap,
  Users,
  HeartPulse,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Flame,
  Activity,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// --- Data: Classes List ---
const classesList = [
  {
    id: 1,
    title: 'CrossFit Classique',
    description:
      "Le cœur de notre programme. Des mouvements fonctionnels variés exécutés à haute intensité. Mélange d'haltérophilie, de gymnastique et de cardio.",
    duration: '60 Min',
    intensity: 'Haute',
    icon: Flame,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Haltérophilie (Weightlifting)',
    description:
      "Concentrez-vous sur la technique pure. Apprenez et perfectionnez l'arraché (snatch) et l'épaulé-jeté (clean & jerk) pour gagner en force explosive.",
    duration: '90 Min',
    intensity: 'Moyenne/Haute',
    icon: Dumbbell,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Cardio HIIT / Sweat',
    description:
      "Brûlez un maximum de calories sans charges lourdes. Un entraînement d'endurance pure utilisant le poids du corps, les rameurs et les vélos.",
    duration: '45 Min',
    intensity: 'Très Haute',
    icon: Timer,
    image:
      'https://images.unsplash.com/photo-1517963879466-e1b54ebd99fc?q=80&w=2800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Gymnastique',
    description:
      "Maîtrisez votre corps dans l'espace. Tractions, muscle-ups, marche sur les mains et renforcement de la sangle abdominale.",
    duration: '60 Min',
    intensity: 'Moyenne',
    icon: Activity,
    image:
      'https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Mobilité & Yoga',
    description:
      'Indispensable pour la récupération. Améliorez votre amplitude de mouvement, réduisez les risques de blessures et détendez votre esprit.',
    duration: '60 Min',
    intensity: 'Faible',
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Compétiteur (Advanced)',
    description:
      'Pour les athlètes expérimentés visant la compétition. Volume plus élevé, mouvements complexes et stratégie de WOD.',
    duration: '120 Min',
    intensity: 'Extrême',
    icon: Trophy,
    image:
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop',
  },
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* --- Header Section --- */}
      <div className="relative py-24 mb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <Badge
                variant="outline"
                className="border-primary text-primary tracking-[0.2em] uppercase bg-primary/5 px-4 py-1">
                Nos Programmes
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                Trouvez Votre <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
                  Discipline
                </span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
                Que vous cherchiez à construire du muscle, améliorer votre endurance ou maîtriser de
                nouvelles compétences, nous avons un cours pour vous.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/schedule">
                  <Button className="h-14 px-8 text-base font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                    Voir le Planning
                  </Button>
                </Link>
              </div>
            </div>

            {/* Header Image grid */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative h-48 w-full rounded-sm overflow-hidden border border-zinc-800 group">
                  <Image
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop"
                    alt="Gym"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 w-full rounded-sm overflow-hidden border border-zinc-800 group">
                  <Image
                    src="https://images.unsplash.com/photo-1574680096141-1c57c694856e?q=80&w=1000&auto=format&fit=crop"
                    alt="Gym"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-64 w-full rounded-sm overflow-hidden border border-zinc-800 group">
                  <Image
                    src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1374&auto=format&fit=crop"
                    alt="Gym"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-48 w-full rounded-sm overflow-hidden border border-zinc-800 group">
                  <Image
                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop"
                    alt="Gym"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Classes Grid Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesList.map((cls) => (
            <Card
              key={cls.id}
              className="bg-zinc-900 border-zinc-800 overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300">
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-zinc-700 group-hover:border-primary group-hover:text-primary transition-colors text-white">
                  <cls.icon className="w-6 h-6" />
                </div>

                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-black font-bold uppercase tracking-wider">
                    {cls.duration}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white border-zinc-600 bg-black/50 backdrop-blur-sm uppercase tracking-wider">
                    Intensité: {cls.intensity}
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <CardHeader>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-primary transition-colors">
                  {cls.title}
                </h3>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-zinc-400 leading-relaxed text-sm">{cls.description}</p>
              </CardContent>

              <CardFooter className="pt-0">
                <Link href="/schedule" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-between border border-zinc-800 hover:bg-white hover:text-black group-hover:border-primary/30 uppercase font-bold tracking-wider text-xs h-12">
                    Réserver ce cours
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* --- Features / Why Us Section --- */}
      <div className="bg-zinc-900 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Pourquoi Nos Cours ?</h2>
            <p className="text-zinc-400 text-lg">
              Nous ne faisons pas que vous faire transpirer. Nous vous enseignons, nous vous
              corrigeons et nous vous faisons progresser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Programmation Éprouvée',
                desc: "Des cycles d'entraînement structurés pour éviter les plateaux et garantir des progrès constants en force et endurance.",
                icon: Zap,
              },
              {
                title: 'Coaching Expert',
                desc: 'Nos coachs ne sont pas là pour compter les répétitions, mais pour corriger votre forme et adapter les charges à votre niveau.',
                icon: Users,
              },
              {
                title: 'Communauté Soudée',
                desc: "Entraînez-vous avec des gens qui vous encouragent. L'esprit d'équipe est au cœur de chaque session.",
                icon: HeartPulse,
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-primary mb-2 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
