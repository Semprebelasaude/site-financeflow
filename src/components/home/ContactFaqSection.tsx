'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'
import Accordion from '@/components/ui/Accordion'
import { EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

const faqs = [
  {
    question: 'É realmente grátis? Vai mudar algum dia?',
    answer:
      'Sim, é grátis — e sem prazo para acabar. O plano grátis tem todas as funcionalidades principais e vai continuar existindo. No futuro, pode vir um plano pago com recursos extras (como o acesso pelo WhatsApp), mas o que está disponível hoje gratuitamente não vai ser tirado de quem já usa.',
  },
  {
    question: 'Preciso conectar minha conta bancária?',
    answer:
      'Não — e isso é uma escolha. O FinanceFlow funciona com lançamento manual: você digita o que entrou e o que saiu. Pode parecer trabalhoso no começo, mas é justamente isso que faz você prestar atenção nos seus gastos. O app não acessa dados bancários de ninguém.',
  },
  {
    question: 'Funciona no iPhone e no Android?',
    answer:
      'Sim. O FinanceFlow funciona pelo navegador — Chrome, Safari, qualquer um. E você pode adicionar um ícone na tela inicial do seu celular para abrir direto, como se fosse um app instalado. No iPhone, abra no Safari, toque em Compartilhar e depois em "Adicionar à Tela de Início". No Android, abra no Chrome, toque no menu (três pontinhos) e escolha "Instalar app" ou "Adicionar à tela inicial".',
  },
  {
    question: 'Meus dados financeiros estão seguros?',
    answer:
      'Sim. Suas informações ficam protegidas com criptografia — os dados trafegam de forma segura e ficam armazenados de forma protegida. Além disso, o app não tem acesso à sua conta bancária: tudo que está lá dentro é o que você mesmo digitou. Só você vê.',
  },
  {
    question: 'Serve para MEI ou autônomo?',
    answer:
      'É feito exatamente para isso. Autônomos, MEIs e freelancers são o público principal do FinanceFlow — especialmente quem mistura despesas pessoais e do negócio numa conta só. A separação "pessoal / empresa" dentro do app foi criada pensando nessa situação.',
  },
  {
    question: 'Como instalo o app no celular?',
    answer:
      'Não precisa baixar nada de loja. Acesse https://app.myfinanceflow.online pelo navegador do seu celular. No iPhone: abra no Safari → toque no ícone de compartilhar (quadrado com seta pra cima) → "Adicionar à Tela de Início" → confirme. No Android: abra no Chrome → toque nos três pontinhos no canto superior direito → "Instalar app" (ou "Adicionar à tela inicial") → confirme. Pronto — vai aparecer um ícone do FinanceFlow na sua tela, como qualquer outro app.',
  },
]

export default function ContactFaqSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="contato" className="bg-brand-dark section-padding" aria-labelledby="contact-title">
      <div className="content-max">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contato */}
          <motion.div
            variants={prefersReduced ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              variants={prefersReduced ? {} : fadeUp}
              id="contact-title"
              className="text-3xl font-bold text-brand-offwhite mb-4"
            >
              Tem dúvida ou quer dar uma sugestão?
            </motion.h2>
            <motion.p variants={prefersReduced ? {} : fadeUp} className="text-brand-offwhite/60 mb-8 leading-relaxed">
              A gente lê tudo. Se precisar de ajuda, encontrou um bug ou tem uma ideia, manda mensagem.
            </motion.p>

            <motion.div variants={prefersReduced ? {} : fadeUp} className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-brand-gold/15 bg-brand-gold/[0.03] hover:border-brand-gold/30 hover:bg-brand-gold/[0.06] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-colors">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-brand-offwhite/40 mb-0.5">E-mail</p>
                  <p className="text-brand-offwhite text-sm font-medium">{EMAIL}</p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-brand-gold/15 bg-brand-gold/[0.03] hover:border-brand-gold/30 hover:bg-brand-gold/[0.06] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-colors">
                  <Instagram size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-brand-offwhite/40 mb-0.5">Instagram</p>
                  <p className="text-brand-offwhite text-sm font-medium">{INSTAGRAM_HANDLE}</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={prefersReduced ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              variants={prefersReduced ? {} : fadeUp}
              className="text-3xl font-bold text-brand-offwhite mb-8"
            >
              Perguntas frequentes
            </motion.h2>

            <motion.div variants={prefersReduced ? {} : fadeUp}>
              {faqs.map((faq, i) => (
                <Accordion key={i} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
