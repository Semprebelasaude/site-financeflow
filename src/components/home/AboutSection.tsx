'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeIn, fadeUp } from '@/lib/motion-variants'
import Button from '@/components/ui/Button'
import { APP_URL } from '@/lib/constants'

const paragraphs = [
  'Quem trabalha por conta própria sabe como é: você faz de tudo ao mesmo tempo. Atende cliente, entrega o serviço, cuida do administrativo — e ainda tenta entender se o negócio está indo bem. E na hora de olhar para o dinheiro, a conta pessoal e a do negócio já estão tão misturadas que fica impossível saber o que é de quem.',
  'Foi exatamente esse problema que motivou a criação do FinanceFlow. Testamos vários aplicativos de controle financeiro e nenhum resolvia essa questão de forma simples: separar o que é gasto pessoal do que é gasto do negócio, sem precisar de dois apps diferentes, sem planilha, sem complexidade de contador.',
  'Então decidimos construir. O FinanceFlow é um app feito por quem vive a mesma realidade do autônomo e do MEI — e por isso cada detalhe foi pensado para ser fácil, honesto e direto ao ponto. Nada de conexão com banco, nada de automação que você não controla. Você lança, você enxerga, você decide.',
  'O app ainda está em desenvolvimento ativo (versão beta). Isso significa que ele vai crescer — e as sugestões de quem usa fazem parte desse crescimento. Comece grátis, use no dia a dia e nos conte o que pode ser melhor.',
]

export default function AboutSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="sobre" className="bg-brand-cream section-padding" aria-labelledby="about-title">
      <div className="content-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Elemento visual */}
          <motion.div
            variants={prefersReduced ? {} : fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex items-center justify-center order-2 lg:order-1"
            aria-hidden="true"
          >
            {/* Fundo dourado abstrato */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 border border-brand-gold/20" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-brand-gold/8 to-transparent border border-brand-gold/10" />

              {/* Ícone central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-gold/15 border-2 border-brand-gold/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-brand-gold">F</span>
                  </div>
                  <p className="text-brand-gold/60 text-sm font-medium">FinanceFlow</p>
                  <p className="text-brand-gold/40 text-xs mt-1">versão beta</p>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/30" />
              <div className="absolute bottom-8 left-8 w-5 h-5 rounded-full bg-brand-gold/15 border border-brand-gold/20" />
              <div className="absolute top-1/2 left-4 w-3 h-3 rounded-full bg-brand-gold/25" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={prefersReduced ? {} : fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              variants={prefersReduced ? {} : fadeUp}
              id="about-title"
              className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8"
            >
              Por que o FinanceFlow existe
            </motion.h2>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={prefersReduced ? {} : fadeUp}
                  className="text-brand-muted leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div variants={prefersReduced ? {} : fadeUp} className="mt-8">
              <Button href={APP_URL} external variant="primary">
                Começar grátis agora
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
