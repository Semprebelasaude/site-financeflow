'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ff-cookie-consent')
    if (!consent) setShow(true)
  }, [])

  const accept = () => {
    localStorage.setItem('ff-cookie-consent', 'accepted')
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem('ff-cookie-consent', 'rejected')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 inset-x-0 z-50 border-t border-brand-gold/20 bg-brand-black/95 backdrop-blur-sm"
          role="dialog"
          aria-label="Consentimento de cookies"
        >
          <div className="max-w-content mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-brand-offwhite/80 flex-1">
              Usamos cookies essenciais para o funcionamento do site. Com a sua autorização, também usamos cookies de
              analytics para entender como as páginas são usadas.{' '}
              <Link href="/cookies" className="text-brand-gold hover:underline">
                Política de Cookies
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={reject}
                className="text-sm px-5 py-2.5 rounded-full border border-brand-gold/30 text-brand-offwhite/70 hover:border-brand-gold/60 hover:text-brand-offwhite transition-all"
              >
                Só cookies essenciais
              </button>
              <button
                onClick={accept}
                className="text-sm px-5 py-2.5 rounded-full bg-brand-gold text-brand-black font-semibold hover:bg-brand-gold-hover transition-all"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
