'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, Mail } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'
import Button from '@/components/ui/Button'
import { APP_URL, EMAIL } from '@/lib/constants'

const freeFeatures = [
  'Lançamentos ilimitados de receitas e despesas',
  'Separação de finanças pessoais e do negócio',
  'Dashboard com saldo, entradas e saídas do mês',
  'Gráfico histórico dos últimos meses',
  '106 categorias prontas — editáveis, com subcategorias, cor e ícone',
  'Recorrência fixa e variável (contas que se repetem)',
  'Parcelamento (com controle de parcelas)',
  'Orçamentos com alerta de limite (barra verde/amarela/vermelha)',
  'Metas com aporte e progresso visual',
  'Exportação para planilha (Excel)',
  'Funciona no celular como app, sem baixar da loja',
  'Recuperação de senha por e-mail',
]

const premiumFeatures = [
  'Tudo do plano grátis',
  'Lançamentos pelo WhatsApp (em texto)',
  'Consultas em linguagem natural ("qual meu saldo pessoal?", "quanto gastei com transporte?")',
]

export default function PricingSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="precos" className="bg-brand-black section-padding" aria-labelledby="pricing-title">
      <div className="content-max">
        <motion.div
          variants={prefersReduced ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={prefersReduced ? {} : fadeUp} className="text-center mb-12">
            <h2 id="pricing-title" className="text-3xl sm:text-4xl font-bold text-brand-offwhite mb-4">
              Sem pegadinha. Sem período de teste que acaba.
            </h2>
            <p className="text-brand-offwhite/60 text-lg">
              O FinanceFlow completo é grátis — e vai continuar sendo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Plano Grátis */}
            <motion.div
              variants={prefersReduced ? {} : fadeUp}
              className="relative p-8 rounded-3xl border-2 border-brand-gold/40 bg-brand-gold/[0.04] hover:border-brand-gold/60 hover:shadow-glow transition-all duration-300"
            >
              {/* Destaque */}
              <div className="absolute -top-3 left-8">
                <span className="px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-bold">
                  Disponível agora
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-offwhite mb-1">Grátis</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-gold">R$ 0</span>
                  <span className="text-brand-offwhite/50 text-sm">/ para sempre</span>
                </div>
                <p className="text-brand-offwhite/60 text-sm mt-3">
                  Tudo o que você precisa para organizar suas finanças do zero.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-brand-offwhite/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href={APP_URL} external variant="primary" className="w-full justify-center">
                Começar grátis
              </Button>
              <p className="text-center text-brand-offwhite/40 text-xs mt-3">Não pedimos cartão de crédito.</p>
            </motion.div>

            {/* Plano Premium */}
            <motion.div
              variants={prefersReduced ? {} : fadeUp}
              className="relative p-8 rounded-3xl border border-brand-gold/15 bg-brand-gold/[0.02] hover:border-brand-gold/25 transition-all duration-300"
            >
              {/* Badge Em breve */}
              <div className="absolute -top-3 left-8">
                <span className="px-4 py-1 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold/80 text-xs font-semibold">
                  Em breve
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-offwhite mb-1">Premium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-brand-offwhite/40 text-lg font-medium">Acesso antecipado exclusivo</span>
                </div>
                <p className="text-brand-offwhite/60 text-sm mt-3">
                  Para quem quer lançar e consultar suas finanças pelo WhatsApp.
                </p>
              </div>

              <p className="text-brand-offwhite/50 text-sm leading-relaxed mb-5">
                Em breve, você vai poder registrar um gasto, consultar o saldo ou perguntar &quot;quanto gastei com
                alimentação esse mês?&quot; — tudo pelo WhatsApp, em texto, sem abrir o app.
              </p>

              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-brand-offwhite/30 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-brand-offwhite/50 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl border border-brand-gold/15 bg-brand-gold/[0.03]">
                <p className="text-brand-offwhite/60 text-sm mb-3">
                  Quer ser um dos primeiros a testar?
                </p>
                <a
                  href={`mailto:${EMAIL}?subject=Acesso Premium`}
                  className="inline-flex items-center gap-2 text-brand-gold text-sm hover:text-brand-gold-hover transition-colors font-medium"
                >
                  <Mail size={16} aria-hidden="true" />
                  Envie um e-mail com o assunto &quot;Acesso Premium&quot;
                </a>
                <p className="text-brand-offwhite/30 text-xs mt-3">
                  Funcionalidade em desenvolvimento. Nenhum valor foi definido ainda.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
