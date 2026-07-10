'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'o-que-e', label: 'O que é o FinanceFlow' },
  { id: 'instalar-celular', label: 'Como instalar no celular' },
  { id: 'primeiros-passos', label: 'Primeiros passos' },
  { id: 'pessoal-empresa', label: 'Pessoal vs. empresa' },
  { id: 'lancamentos', label: 'Lançar receita ou despesa' },
  { id: 'dashboard', label: 'O dashboard' },
  { id: 'categorias', label: 'Categorias' },
  { id: 'recorrencia', label: 'Lançamentos que se repetem' },
  { id: 'orcamentos', label: 'Orçamentos' },
  { id: 'metas', label: 'Metas' },
  { id: 'exportacao', label: 'Exportar seus dados' },
  { id: 'seguranca', label: 'Segurança da conta' },
  { id: 'ajuda', label: 'Ajuda' },
]

export default function SidebarNav() {
  const [active, setActive] = useState('o-que-e')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-20% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <nav aria-label="Índice da página" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">Neste guia</p>
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                active === id
                  ? 'bg-brand-gold/10 text-brand-dark font-semibold border-l-2 border-brand-gold'
                  : 'text-brand-muted hover:text-brand-dark hover:bg-gray-100'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
