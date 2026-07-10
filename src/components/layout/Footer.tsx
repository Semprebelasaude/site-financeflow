import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'
import { EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

const legalLinks = [
  { href: '/privacidade', label: 'Privacidade' },
  { href: '/termos', label: 'Termos de uso' },
  { href: '/cookies', label: 'Política de cookies' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/10 bg-brand-black">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-brand-gold flex items-center justify-center font-bold text-brand-black text-xs">
                F
              </div>
              <span className="font-semibold text-brand-offwhite">FinanceFlow</span>
            </div>
            <p className="text-xs text-brand-offwhite/40">© 2026 FinanceFlow · Versão beta · Feito no Brasil</p>
          </div>

          {/* Legal links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Links legais">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-offwhite/50 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-brand-offwhite/50 hover:text-brand-gold transition-colors"
              aria-label="E-mail de contato"
            >
              <Mail size={18} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-offwhite/50 hover:text-brand-gold transition-colors"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
