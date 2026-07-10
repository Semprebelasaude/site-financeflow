'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, SplitSquareHorizontal, PieChart, Target, Smartphone, ShieldCheck } from 'lucide-react'
import { staggerContainer, scaleUp } from '@/lib/motion-variants'

const cards = [
  {
    icon: TrendingUp,
    title: 'Enxergue seu lucro real',
    desc: 'Chega de confundir faturamento com lucro. O FinanceFlow separa o que entrou do que saiu — e mostra o que sobrou de verdade, tanto no negócio quanto na sua vida pessoal.',
  },
  {
    icon: SplitSquareHorizontal,
    title: 'Pessoal e empresa no mesmo lugar, sem misturar',
    desc: 'Você vê os dois lados, mas o app os trata separado. Cada lançamento vai para o seu mundo. Nada de planilha dupla, nada de conta mental no fim do mês.',
  },
  {
    icon: PieChart,
    title: 'Orçamentos que avisam antes de estourar',
    desc: 'Defina quanto quer gastar por categoria no mês. Uma barra verde vai virando amarela conforme você usa — e fica vermelha antes de passar do limite. Você sabe antes, não depois.',
  },
  {
    icon: Target,
    title: 'Metas com progresso que você vê',
    desc: 'Quer guardar para uma reserva, uma viagem ou um equipamento? Cria uma meta, registra os aportes e acompanha o progresso com uma barra visual. Simples e motivador.',
  },
  {
    icon: Smartphone,
    title: 'Vira um app no seu celular, sem baixar nada da loja',
    desc: 'Acesse pelo navegador e adicione à tela inicial — vira um ícone como qualquer outro app. Funciona no iPhone e no Android, sem precisar de atualização manual.',
  },
  {
    icon: ShieldCheck,
    title: 'Seus dados são seus',
    desc: 'O FinanceFlow não acessa sua conta bancária. Você digita o que quer registrar — e só você vê. Exporte tudo para planilha quando quiser e leve seus dados aonde precisar.',
  },
]

export default function HighlightsSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="destaques" className="bg-brand-black section-padding" aria-labelledby="highlights-title">
      <div className="content-max">
        <motion.div
          variants={prefersReduced ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={prefersReduced ? {} : scaleUp}
            id="highlights-title"
            className="text-3xl sm:text-4xl font-bold text-brand-offwhite text-center mb-12"
          >
            Feito para quem trabalha <span className="text-brand-gold">por conta própria</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={prefersReduced ? {} : scaleUp}
                className="group p-6 rounded-2xl border border-brand-gold/10 bg-brand-gold/[0.03] hover:border-brand-gold/25 hover:bg-brand-gold/[0.06] hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  <card.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-brand-offwhite mb-2 leading-snug">{card.title}</h3>
                <p className="text-brand-offwhite/60 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
