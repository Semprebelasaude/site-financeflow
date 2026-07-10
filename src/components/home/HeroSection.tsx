'use client'

import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import { Suspense } from 'react'
import Button from '@/components/ui/Button'
import HeroFallback from './HeroFallback'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import { APP_URL } from '@/lib/constants'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <HeroFallback />,
})

export default function HeroSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      aria-label="Apresentação do FinanceFlow"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-gold/5 pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Texto */}
          <motion.div
            variants={prefersReduced ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={prefersReduced ? {} : fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-brand-gold/30 text-brand-gold/80 bg-brand-gold/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" aria-hidden="true" />
                Versão beta · Grátis para começar
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={prefersReduced ? {} : fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-offwhite leading-tight tracking-tight"
            >
              Separe o que é <span className="text-brand-gold">seu</span> do que é da{' '}
              <span className="text-brand-gold">empresa.</span> Num lugar só.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={prefersReduced ? {} : fadeUp}
              className="text-lg text-brand-offwhite/70 leading-relaxed max-w-lg"
            >
              O FinanceFlow é para autônomos, MEIs e freelancers que querem saber exatamente quanto o negócio está
              rendendo — e quanto sobra pra eles mesmos. Você lança o que entra e o que sai, e o app cuida do resto.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={prefersReduced ? {} : fadeUp}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button href={APP_URL} external variant="primary" className="text-base px-8 py-4">
                Começar grátis
              </Button>
              <Button href="/como-usar" variant="secondary" className="text-base px-8 py-4">
                Ver como funciona
              </Button>
            </motion.div>

            {/* Nota */}
            <motion.p variants={prefersReduced ? {} : fadeUp} className="text-sm text-brand-offwhite/40">
              Versão beta · Grátis para começar · Sem conectar seu banco
            </motion.p>
          </motion.div>

          {/* 3D / Visual */}
          <div className="relative h-[400px] lg:h-[560px] w-full">
            {/* Mobile: só fallback */}
            <div className="lg:hidden w-full h-full">
              <HeroFallback />
            </div>
            {/* Desktop: 3D */}
            <div className="hidden lg:block w-full h-full">
              {!prefersReduced ? (
                <Suspense fallback={<HeroFallback />}>
                  <HeroScene />
                </Suspense>
              ) : (
                <HeroFallback />
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:flex justify-center mt-8"
          aria-hidden="true"
        >
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-brand-gold/30 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-brand-gold/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
