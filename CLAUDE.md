# CLAUDE.md — Site FinanceFlow (institucional + vendas)
**Projeto:** Site marketing/institucional do app FinanceFlow
**Pasta:** `D:\Automacao\ClaudeCode\Projetos\Sites\site-financeflow`
**Data de início:** 2026-07-10

---

## REGRAS INVIOLÁVEIS

- Projeto NOVO e ISOLADO. NÃO tocar em nada do app FinanceFlow (repo Finance-Flow, Vercel "financeflow", banco Neon).
- Site sem backend, sem auth, sem banco. Formulário = mailto:.
- Repo GitHub PRÓPRIO e novo.
- Deploy: PREVIEW no Vercel. NUNCA produção sem OK explícito do Vinicius.
- Todo conteúdo em português (BR).
- Domínio de destino (só na hora da produção, com OK): raiz myfinanceflow.online + www. Não mexer nos registros de e-mail do Resend. O app vive em app.myfinanceflow.online.

---

## STACK

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Motion (Framer Motion) para animações
- React Three Fiber / Three.js para 3D no herói
- lucide-react para ícones
- SEM backend, SEM auth, SEM banco

---

## IDENTIDADE VISUAL

- Fundo dominante (impacto): `#0A0A0A` (preto profundo)
- Acento único: `#D4AF37` (dourado/âmbar quente — puxar levemente para cobre, não ouro metálico frio)
- Texto: `#F5F5F0` (off-white)
- Seções de leitura longa: fundo claro (off-white/creme) + texto escuro
- Contraste AA obrigatório em tudo
- Cantos suaves, muito espaço para respiro
- Tipografia: sans-serif moderna e acolhedora (ex: Inter, Plus Jakarta Sans)

---

## PÁGINAS (5 ao total)

1. **Home** (`/`) — 8 seções: Herói, Problema, Solução, Destaques, Sobre, Preços, Contato+FAQ, Rodapé
2. **Como usar** (`/como-usar`) — ~13 seções: manual completo em linguagem de leigo
3. **Privacidade** (`/privacidade`) — Política de Privacidade LGPD
4. **Termos** (`/termos`) — Termos de Uso
5. **Cookies** (`/cookies`) — Política de Cookies + banner de consentimento

---

## DADOS REAIS

- App: https://app.myfinanceflow.online
- E-mail: financeflowappbr@gmail.com
- Instagram: @financeflowappbr → https://instagram.com/financeflowappbr
- 106 categorias prontas
- Funcionalidades: separação pessoal/empresa, recorrência/parcelamento, orçamentos, metas, exportação para planilha, instalável no celular, recuperação de senha por e-mail, app em BETA

---

## PERFORMANCE (GATES — bloqueia se falhar)

- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- 3D NÃO pode quebrar LCP. Se pesar no mobile, servir versão estática elegante.

---

## ACESSIBILIDADE

- Contraste AA em tudo
- Foco visível
- Alt em todas imagens
- prefers-reduced-motion respeitado

---

## SEO

- title/description por página
- Open Graph
- sitemap
- favicon (F dourado da marca)
- lang="pt-BR"
- Dados estruturados básicos
- Termos-alvo: "controle financeiro para autônomos", "app financeiro MEI", "separar finanças pessoais e empresariais", "gestão financeira freelancer"

---

## IMAGENS

- MCP pexels (pexels_search_photos) para fotos
- URL real retornada (confirmar HTTP 200)
- PROIBIDO: inventar URL, usar source.unsplash, caixa cinza, foto com texto/placa/logo
- PREFERIR ilustração/ícones line-art dourado a fotos genéricas (especialmente no herói)

---

## PLANO DE EXECUÇÃO (ETAPAS)

### Etapa 0 — SETUP (Claude Code direto)
- Criar estrutura inicial do projeto Next.js
- Configurar Tailwind, TypeScript, dependências
- Output: `_handoff/00-setup-completo.md`

### Etapa 1 — ARQUITETURA (arquiteto / Opus)
- Definir estrutura de pastas, componentes, routing
- Planejar elemento 3D do herói
- Design system tokens
- Output: `_handoff/01-arquitetura.md`

### Etapa 2 — CONTEÚDO/COPY (conteudo-copy / Sonnet) — PARALELA COM ETAPA 1
- Copy completa para Home (8 seções)
- Copy completa para Como usar (~13 seções)
- Textos legais (Privacidade, Termos, Cookies)
- Output: `_handoff/02-copy.md`

### Etapa 3 — CONSTRUÇÃO (construtor / Sonnet)
- Todas as páginas e componentes
- 3D no herói (React Three Fiber)
- Animações (Motion/Framer)
- Banner de cookies
- Output: código na pasta do projeto

### Etapa 4 — BLINDAGEM VISUAL (engenheiro-qualidade / Sonnet)
- Auditoria visual com Playwright
- Performance (LCP/INP/CLS) — PODER DE BLOQUEIO
- Acessibilidade (AA, foco, motion)
- Output: `_handoff/04-qualidade.md`

### Etapa 5 — ENTREGA (entrega / Sonnet) — PORTÃO ANTES DE PRODUÇÃO
- Criar repo GitHub novo
- Deploy preview no Vercel (projeto novo)
- Screenshots do preview
- Output: `_handoff/05-entrega.md` + link de preview

---

## PORTÕES HUMANOS

- Produção (myfinanceflow.online): OK do Vinicius
- DNS: OK do Vinicius
- Qualquer gasto novo: OK do Vinicius

---

## ESTADO ATUAL

- [x] CLAUDE.md criado
- [ ] Setup do projeto
- [ ] Arquitetura definida
- [ ] Copy escrita
- [ ] Construção concluída
- [ ] Qualidade auditada
- [ ] Preview entregue
