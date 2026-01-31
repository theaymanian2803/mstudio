'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Linkedin, Award, Zap, Star, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// --- Data: Team Members ---
const teamMembers = [
  {
    id: 1,
    name: 'Alexandre Dubois',
    role: 'Head Coach & Fondateur',
    specialty: 'CrossFit Elite / Programmation',
    bio: "Ancien athlète de haut niveau avec plus de 10 ans d'expérience. Alex vit et respire la performance.",
    image:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop',
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    id: 2,
    name: 'Sarah Benali',
    role: 'Coach Haltérophilie',
    specialty: 'Technique Olympique / Force',
    bio: 'Spécialiste de la barre olympique. Sarah vous apprendra à soulever lourd avec une technique parfaite.',
    image:
      'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop',
    socials: { instagram: '#', twitter: '#' },
  },
  {
    id: 3,
    name: "Mike 'The Rock'",
    role: 'Coach Conditioning',
    specialty: 'Endurance / HIIT',
    bio: "Il vous poussera dans vos derniers retranchements. Si vous voulez améliorer votre cardio, c'est l'homme qu'il vous faut.",
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop',
    socials: { instagram: '#' },
  },
  {
    id: 4,
    name: 'Julie Martin',
    role: 'Coach Mobilité & Gym',
    specialty: 'Gymnastique / Récupération',
    bio: "Ancienne gymnaste, Julie vous aidera à maîtriser votre corps dans l'espace et à rester sans blessure.",
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
    socials: { instagram: '#', linkedin: '#' },
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* --- Header Section --- */}
      <div className="relative py-24 mb-16 overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.15),transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 max-w-7xl mx-auto text-center">
          <Badge
            variant="outline"
            className="border-primary text-primary tracking-[0.2em] uppercase bg-primary/5 px-4 py-1 mb-6">
            L'Équipe CrossFitMatter
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Rencontrez <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">
              L'Élite
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nos coachs ne sont pas seulement des entraîneurs, ce sont des mentors dédiés à votre
            réussite, certifiés et passionnés par le dépassement de soi.
          </p>
        </div>
      </div>

      {/* --- Stats / Values Banner --- */}
      <div className="border-y border-zinc-800 bg-zinc-900/30 backdrop-blur-sm mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {[
              { label: "Années d'Expérience Cumulées", value: '40+', icon: Star },
              { label: 'Athlètes Formés', value: '1000+', icon: Zap },
              { label: 'Certifications Internationales', value: '100%', icon: Award },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="py-8 flex flex-col items-center text-center group cursor-default">
                <stat.icon className="w-8 h-8 text-zinc-600 group-hover:text-primary transition-colors mb-3" />
                <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Team Grid --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-zinc-950 border-zinc-800 overflow-hidden group hover:border-primary/50 transition-all duration-500 rounded-none relative">
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                {/* Social Icons (Appear on Hover) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  {member.socials.instagram && (
                    <Link
                      href={member.socials.instagram}
                      className="w-10 h-10 bg-black/50 backdrop-blur-md border border-zinc-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      className="w-10 h-10 bg-black/50 backdrop-blur-md border border-zinc-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link
                      href={member.socials.twitter}
                      className="w-10 h-10 bg-black/50 backdrop-blur-md border border-zinc-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Badge className="bg-primary text-black font-bold text-[10px] uppercase mb-2">
                    {member.role}
                  </Badge>
                  <h3 className="text-2xl font-black text-white uppercase italic">{member.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">
                    {member.specialty}
                  </p>

                  {/* Bio (Revealed on hover via height/opacity trick or just always visible but subtle) */}
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-3 mt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>

      {/* --- Join Team CTA --- */}
      <div className="container px-4 mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Rejoignez L'Équipe
            </h2>
            <p className="text-zinc-400 text-lg">
              Vous êtes un coach passionné, certifié et prêt à changer des vies ? Nous sommes
              toujours à la recherche de nouveaux talents pour agrandir la famille CrossFitMatter.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="h-14 px-10 text-base font-black uppercase tracking-widest bg-white text-black hover:bg-primary hover:text-black rounded-none transition-all hover:scale-105">
                  Postuler Maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
