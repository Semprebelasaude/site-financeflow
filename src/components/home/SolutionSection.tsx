'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { PenLine, LayoutGrid, BarChart2 } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'

const steps = [
  {
    icon: PenLine,
    title: 'Lance em segundos o que entrou e o que saiu',
    desc: 'Recebeu um pagamento? Pagou uma conta? Registra em segundos com data, valor, categoria e uma observação se quiser. É tudo manual — e isso é proposital. Você presta atenção no que gasta.',
  },
  {
    icon: LayoutGrid,
    title: 'Marque se é do negócio ou pessoal',
    desc: 'Cada lançamento tem um campo: "pessoal" ou "empresa". Isso separa automaticamente os dois mundos. O app calcula tudo separado, sem você precisar fazer nenhuma conta.',
  },
  {
    icon: BarChart2,
    title: 'Veja para onde vai seu dinheiro',
    desc: 'Dashboard com saldo, entradas e saídas do mês. Gráfico dos últimos meses. As categorias que mais pesam. Tudo numa tela, sem precisar abrir planilha.',
  },
]

export default function SolutionSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="como-funciona" className="bg-brand-cream section-padding" aria-labelledby="solution-title">
      <div className="content-max">
        <motion.div
          variants={prefersReduced ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <motion.h2
            variants={prefersReduced ? {} : fadeUp}
            id="solution-title"
            className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4"
          >
            Simples assim: três passos para ter <span className="text-brand-dark underline decoration-brand-gold decoration-2 underline-offset-4">clareza total</span>
          </motion.h2>
          <motion.p variants={prefersReduced ? {} : fadeUp} className="text-brand-muted max-w-xl mx-auto">
            Sem conectar banco. Sem planilha travada. Sem precisar entender de finanças antes de começar.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={prefersReduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: prefersReduced ? 0 : i * 0.15 }}
              className="relative"
            >
              {/* Linha conectora */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-brand-gold/20"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <step.icon size={28} aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-gold text-brand-black text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-dark text-lg">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
