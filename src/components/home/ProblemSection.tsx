'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingDown, Wallet, AlertCircle, Clock } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'

const problems = [
  {
    icon: TrendingDown,
    title: '"Faturei bem esse mês, mas não sei onde foi parar."',
    desc: 'O dinheiro entrou, as contas foram pagas — mas o saldo no final do mês não bate com o que você esperava. Você fatura, mas não sabe o que sobrou de verdade.',
  },
  {
    icon: Wallet,
    title: '"Pago minhas contas pessoais da conta do negócio. E vice-versa."',
    desc: 'Misturar é fácil. Depois fica impossível saber se o negócio está dando lucro de verdade ou se você só está vivendo do caixa da empresa sem perceber.',
  },
  {
    icon: AlertCircle,
    title: '"Imposto, guia do MEI, INSS — chega de surpresa no final do mês."',
    desc: 'Você esquece de reservar porque não vê claramente o que entra. Quando a cobrança chega, já não tem mais.',
  },
  {
    icon: Clock,
    title: '"Não tenho reserva para um mês ruim."',
    desc: 'Sem visibilidade sobre o que sobra, não tem como guardar. E quando o movimento cai, o aperto é imediato.',
  },
]

export default function ProblemSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="problemas" className="bg-brand-black section-padding" aria-labelledby="problems-title">
      <div className="content-max">
        <motion.div
          variants={prefersReduced ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={prefersReduced ? {} : fadeUp}
            id="problems-title"
            className="text-3xl sm:text-4xl font-bold text-brand-offwhite text-center mb-4"
          >
            Se você se identificar com alguma dessas situações,{' '}
            <span className="text-brand-gold">o FinanceFlow é pra você.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                variants={prefersReduced ? {} : fadeUp}
                className="group p-6 rounded-2xl border border-brand-gold/10 bg-brand-gold/[0.03] hover:border-brand-gold/30 hover:bg-brand-gold/[0.06] transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <p.icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-offwhite mb-2 leading-snug">{p.title}</h3>
                    <p className="text-brand-offwhite/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
