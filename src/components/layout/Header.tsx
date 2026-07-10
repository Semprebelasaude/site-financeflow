'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { APP_URL } from '@/lib/constants'

const navLinks = [
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/como-usar', label: 'Manual' },
  { href: '/#precos', label: 'Preços' },
  { href: '/#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-gold/10 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="FinanceFlow — página inicial">
          <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center font-bold text-brand-black text-sm group-hover:shadow-glow transition-shadow">
            F
          </div>
          <span className="font-semibold text-brand-offwhite">FinanceFlow</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brand-offwhite/70 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex">
          <Button href={APP_URL} external variant="primary" className="text-sm px-6 py-2.5">
            Começar grátis
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-offwhite hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black/95 border-t border-brand-gold/10 overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-4" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-brand-offwhite/80 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button href={APP_URL} external variant="primary" className="mt-2 w-full justify-center">
                Começar grátis
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
