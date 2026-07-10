import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/ProblemSection'
import SolutionSection from '@/components/home/SolutionSection'
import HighlightsSection from '@/components/home/HighlightsSection'
import AboutSection from '@/components/home/AboutSection'
import PricingSection from '@/components/home/PricingSection'
import ContactFaqSection from '@/components/home/ContactFaqSection'

export const metadata: Metadata = {
  title: 'FinanceFlow — Controle financeiro para autônomos e MEIs',
  description:
    'Separe suas finanças pessoais das do negócio. App simples para autônomos, MEIs e freelancers organizarem receitas, despesas, orçamentos e metas.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HighlightsSection />
      <AboutSection />
      <PricingSection />
      <ContactFaqSection />
    </>
  )
}
