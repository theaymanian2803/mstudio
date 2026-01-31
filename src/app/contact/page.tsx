'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar as CalendarIcon,
  CheckCircle2,
  Dumbbell,
  ArrowRight,
  Loader2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// --- Contact Page Component ---
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    sessionType: 'CrossFit', // Default value
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mykkyypj', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          sessionType: 'CrossFit',
          message: '',
        })
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.")
      }
    } catch (error) {
      alert('Erreur de connexion.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Page Header */}
      <div className="relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="container relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 border-primary text-primary tracking-[0.2em] uppercase bg-primary/5 px-4 py-1">
            Commencez Maintenant
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Réservez Votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
              Séance
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Prêt à transformer votre corps ? Remplissez le formulaire ci-dessous pour réserver votre
            session d'essai ou pour toute question.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Contact Info & Image */}
          <div className="space-y-12">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase mb-1">Notre Salle</h3>
                    <p className="text-zinc-400 text-sm">
                      123 Fitness Blvd,
                      <br />
                      Marrakech, Maroc
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase mb-1">Email & Tél</h3>
                    <p className="text-zinc-400 text-sm">
                      contact@crossfitmatter.com
                      <br />
                      +212 6 00 00 00 00
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Motivational Image */}
            <div className="relative rounded-sm overflow-hidden border border-zinc-800 h-[400px] group">
              <Image
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop"
                alt="Trainer helping client"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-black uppercase text-white mb-2">Pas d'Excuses.</h3>
                <p className="text-primary font-bold tracking-wider uppercase flex items-center gap-2">
                  Juste des Résultats <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 border border-zinc-800 bg-zinc-950/50">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">
                  Horaires d'Ouverture
                </h4>
                <p className="text-zinc-400 text-sm mb-1">
                  <span className="text-white font-bold w-24 inline-block">Lun - Ven:</span> 06h00 -
                  21h00
                </p>
                <p className="text-zinc-400 text-sm">
                  <span className="text-white font-bold w-24 inline-block">Sam - Dim:</span> 08h00 -
                  16h00
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 relative overflow-hidden">
            {/* Form Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-black uppercase mb-2">Formulaire de Session</h2>
              <p className="text-zinc-400 mb-8">
                Remplissez les détails ci-dessous pour réserver votre créneau.
              </p>

              {isSuccess ? (
                <div className="bg-green-500/10 border border-green-500/20 p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Reçu !</h3>
                  <p className="text-zinc-300">
                    Nous vous contacterons très bientôt pour confirmer votre session.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-zinc-700 text-white hover:bg-white hover:text-black"
                    onClick={() => setIsSuccess(false)}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Nom Complet
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-black border-zinc-800 focus:border-primary h-12 text-white placeholder:text-zinc-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-black border-zinc-800 focus:border-primary h-12 text-white placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Numéro de Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+212 6..."
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-black border-zinc-800 focus:border-primary h-12 text-white placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Session Details Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Picker (Native styled) */}
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="date"
                        className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <CalendarIcon className="w-3 h-3" /> Date Souhaitée
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        // Tailwind dark mode calendar styling
                        className="bg-black border-zinc-800 focus:border-primary h-12 text-white placeholder:text-zinc-600 [color-scheme:dark] cursor-pointer"
                      />
                    </div>

                    {/* Session Type Selector */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="sessionType"
                        className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Dumbbell className="w-3 h-3" /> Type de Session
                      </Label>
                      <div className="relative">
                        <select
                          id="sessionType"
                          name="sessionType"
                          value={formData.sessionType}
                          onChange={handleChange}
                          className="w-full h-12 bg-black border border-zinc-800 rounded-md px-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer">
                          <option value="CrossFit">CrossFit Classique</option>
                          <option value="Cardio HIIT">Cardio HIIT</option>
                          <option value="Bodybuilding">Musculation / Bodybuilding</option>
                          <option value="Weightlifting">Haltérophilie</option>
                          <option value="Gymnastics">Gymnastique</option>
                          <option value="Private Coaching">Coaching Privé</option>
                        </select>
                        {/* Custom Arrow Icon */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-zinc-500">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.5 4.5L6 8L9.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Message (Optionnel)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Parlez-nous de vos objectifs ou de vos blessures éventuelles..."
                      className="bg-black border-zinc-800 focus:border-primary min-h-[120px] text-white placeholder:text-zinc-600"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-black uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 rounded-none shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all hover:scale-[1.01]">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" /> Envoi...
                      </span>
                    ) : (
                      'Confirmer La Réservation'
                    )}
                  </Button>

                  <p className="text-center text-xs text-zinc-600 mt-4">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
