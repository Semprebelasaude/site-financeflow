# 04 — Relatório de Qualidade — Site FinanceFlow
**Data:** 2026-07-10
**Engenheiro:** engenheiro-qualidade
**Método:** Operado — servidor dev rodando em localhost:3000, Playwright headless com scroll real, medições calculadas.

---

## Método de operação

- Servidor Next.js 15 iniciado via `npm run dev` (porta 3000)
- Playwright instalado e usado para navegar, scrollar e tirar screenshots reais de todas as páginas
- Contraste medido calculando luminância relativa WCAG 2.1 das cores computadas pelo browser (getComputedStyle)
- Overflow horizontal medido com `scrollWidth > clientWidth` em viewport 375px
- Links verificados via `href` computado pelo browser

---

## FASE 1 — Auditoria Visual

### Páginas verificadas (todas HTTP 200)
| Página | Status HTTP | Conteúdo visível | Obs |
|--------|-------------|-----------------|-----|
| / (Home) | 200 | SIM | Exige scroll para ativar animações whileInView — correto |
| /como-usar | 200 | SIM | 13 seções + sidebar funcionando |
| /privacidade | 200 | SIM | Layout correto, fundo claro |
| /termos | 200 | SIM | Layout correto, fundo claro |
| /cookies | 200 | SIM | Layout correto, fundo claro |

### Critérios visuais
- Herói com headline e CTAs: PASSOU
- Cookie banner na primeira visita: PASSOU (role="dialog", aria-label)
- Fundo preto nas seções de impacto (hero, problemas, destaques, preços): PASSOU
- Fundo claro nas seções de leitura (como-funciona, como-usar, legais): PASSOU
- Dourado como acento controlado: PASSOU (após correções de contraste)
- Sem overflow horizontal em nenhuma página mobile 375px: PASSOU

---

## FASE 2 — Animações

- Animações `framer-motion` com `whileInView` funcionam corretamente com scroll real
- `useReducedMotion()` implementado em todos os componentes animados — respeita preferência do usuário
- HeroScene (3D) carregado dinamicamente com `next/dynamic` e fallback elegante

---

## FASE 3 — Performance (estimativa estática, não Lighthouse medido)

Build gerou todas as rotas como Static (SSG). First Load JS:
- Home: 158 kB (inclui framer-motion e Three.js via HeroScene)
- /como-usar: 104 kB
- Páginas legais: 103–106 kB

**NOTA:** LCP não foi medido com Lighthouse real (servidor local, sem Lighthouse CI instalado). Estimativa favorável dado que todas as rotas são estáticas e não há imagens pesadas. Recomenda-se medir LCP em produção com Lighthouse após deploy.

---

## FASE 4 — Acessibilidade (WCAG)

### Verificações automáticas por página
| Critério | Resultado |
|----------|-----------|
| `lang="pt-BR"` em todas as páginas | PASSOU |
| H1 único por página | PASSOU (5/5 páginas) |
| Imagens sem alt | NENHUMA (site não usa imagens `<img>`, usa SVG inline e ícones) |
| Links/botões sem label | NENHUM encontrado |
| Skip link | AUSENTE — não-bloqueador para este tipo de site |

### Contraste WCAG AA — Cores verificadas

| Par | Ratio | Threshold | Status |
|-----|-------|-----------|--------|
| offwhite (#F5F5F0) sobre preto (#0A0A0A) | 18.80:1 | 4.5:1 | PASSOU |
| dourado (#D4AF37) sobre preto (#0A0A0A) | 9.42:1 | 4.5:1 | PASSOU |
| preto (#0A0A0A) sobre dourado (#D4AF37) — CTA | 9.42:1 | 4.5:1 | PASSOU |
| dark (#1A1A1A) sobre cream (#FAFAF7) | 16.64:1 | 4.5:1 | PASSOU |
| muted (#6B7280) sobre cream — subtítulos | 5.69:1 | 4.5:1 | PASSOU |
| **dourado sobre cream — "clareza total"** | **2.01:1** | 3:1 | **BLOQUEOU → CORRIGIDO** |
| **dourado sobre bg claro — sidebar ativo** | **1.88:1** | 4.5:1 | **BLOQUEOU → CORRIGIDO** |

---

## Problemas encontrados e corrigidos

### BLOQUEADOR 1 — Contraste insuficiente: "clareza total" (SolutionSection)
- **Arquivo:** `src/components/home/SolutionSection.tsx:43`
- **Problema:** `text-brand-gold` (#D4AF37) sobre fundo `bg-brand-cream` (#FAFAF7) = 2.01:1 (threshold 3:1 para 36px bold)
- **Correção:** Trocado para `text-brand-dark` com `underline decoration-brand-gold decoration-2 underline-offset-4` — mantém acento dourado visual, contraste sobe para 16.64:1
- **Status:** CORRIGIDO E VERIFICADO

### BLOQUEADOR 2 — Contraste insuficiente: link ativo sidebar (SidebarNav)
- **Arquivo:** `src/components/como-usar/SidebarNav.tsx:54`
- **Problema:** `text-brand-gold` sobre fundo claro `bg-brand-gold/10` ≈ 1.88:1 (threshold 4.5:1 para 14px)
- **Correção:** Trocado para `text-brand-dark font-semibold` — mantém borda dourada como indicador visual, contraste sobe para 15.83:1
- **Status:** CORRIGIDO E VERIFICADO

---

## Verificação de links críticos

| Link | Destino | Status |
|------|---------|--------|
| Botão "Começar grátis" (header) | https://app.myfinanceflow.online/ | CORRETO |
| Nav "Como funciona" | /#como-funciona | CORRETO |
| Nav "Manual" | /como-usar | CORRETO |
| Nav "Preços" | /#precos | CORRETO |
| Nav "Contato" | /#contato | CORRETO |
| Footer "Privacidade" | /privacidade | CORRETO |
| Footer "Termos de uso" | /termos | CORRETO |
| Footer "Política de cookies" | /cookies | CORRETO |

---

## Build final

```
npm run build — PASSOU
8/8 páginas geradas (Static SSG)
0 erros TypeScript
0 warnings
```

---

## Veredito

**PRONTO PARA O AUDITOR.**

Todos os bloqueadores identificados foram corrigidos. Build passa. Acessibilidade básica sólida. Contraste AA garantido em todos os textos verificados. Navegação completa e funcional.

Recomendação pós-deploy: medir LCP real com Lighthouse em produção para confirmar < 2.5s.
