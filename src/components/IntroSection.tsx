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

const IntroSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side - REMOVED GRAYSCALE */}
          <div className="relative group min-h-[500px]">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-none blur-lg opacity-75"></div>
            <Image
              src="https://pub-3fe2b2a234a04507951dc3d5646b7a33.r2.dev/hym/IMG_0115.jpeg"
              alt="Athlete tying shoes"
              fill
              className="relative rounded-sm shadow-2xl object-cover"
              unoptimized
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary text-primary-foreground p-4 flex flex-col justify-center items-center text-center z-20 shadow-xl shadow-primary/20">
              <span className="font-black text-4xl">15+</span>
              <span className="text-xs font-bold uppercase tracking-wider">Années d'Exp.</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">
                Qui Sommes-Nous
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Commencez Votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                Transformation
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Nous proposons des programmes holistiques avec des studios de classe mondiale, des
              entraîneurs d'élite et des conseillers en nutrition pour vous aider à transformer
              votre corps et votre santé. Nous ne forgeons pas seulement des corps, nous forgeons du
              caractère.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Coachs d'Élite Certifiés",
                'Nutrition & Plans Alimentaires',
                'Compétitions Communautaires',
                'Feuille de Route Personnalisée',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 border border-zinc-800 bg-zinc-900/50 hover:border-primary/50 transition-colors group">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span className="font-medium text-zinc-300 text-sm uppercase tracking-wide group-hover:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant="link"
              className="text-primary pl-0 text-lg font-bold decoration-2 underline-offset-8 mt-4 hover:text-white transition-colors">
              EN SAVOIR PLUS SUR NOUS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
