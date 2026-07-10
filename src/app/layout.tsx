import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://myfinanceflow.online'),
  title: {
    default: 'FinanceFlow — Controle financeiro para autônomos e MEIs',
    template: '%s | FinanceFlow',
  },
  description:
    'Separe suas finanças pessoais das do negócio. App simples para autônomos, MEIs e freelancers organizarem receitas, despesas, orçamentos e metas.',
  keywords: [
    'controle financeiro para autônomos',
    'app financeiro MEI',
    'separar finanças pessoais e empresariais',
    'gestão financeira freelancer',
  ],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://myfinanceflow.online',
    siteName: 'FinanceFlow',
    title: 'FinanceFlow — Controle financeiro para autônomos e MEIs',
    description: 'Separe suas finanças pessoais das do negócio. App simples para autônomos e MEIs.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body className="bg-brand-black text-brand-offwhite font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
