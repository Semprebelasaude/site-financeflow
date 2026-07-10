# 01 — Arquitetura do Site FinanceFlow

**Tipo declarado:** Site institucional + vendas (landing multipage)
**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + Motion (Framer Motion) + React Three Fiber + lucide-react
**Banco:** Nenhum (site estatico, SSG)
**Monetizacao:** Nenhuma no site (redireciona para o app)
**Nivel de seguranca:** Basico (sem dados sensiveis, sem auth, sem backend)

---

## 1. Estrutura de Pastas

```
site-financeflow/
├── public/
│   ├── images/              # Imagens baixadas (Pexels, assets proprios)
│   ├── favicon.svg          # F dourado
│   ├── og-image.jpg         # Open Graph default
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx       # RootLayout (font, metadata global, CookieBanner)
│   │   ├── page.tsx         # Home
│   │   ├── como-usar/
│   │   │   └── page.tsx
│   │   ├── privacidade/
│   │   │   └── page.tsx
│   │   ├── termos/
│   │   │   └── page.tsx
│   │   └── cookies/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navbar fixa
│   │   │   ├── Footer.tsx          # Rodape global
│   │   │   └── MobileMenu.tsx      # Menu hamburger mobile
│   │   ├── home/
│   │   │   ├── HeroSection.tsx     # Hero com 3D
│   │   │   ├── HeroScene.tsx       # Canvas R3F (dynamic import)
│   │   │   ├── HeroFallback.tsx    # Fallback estatico (mobile/reduced-motion)
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── HighlightsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── ContactFaqSection.tsx
│   │   │   └── FeatureCard.tsx     # Card reutilizavel (6 destaques)
│   │   ├── como-usar/
│   │   │   ├── SidebarNav.tsx      # Indice lateral sticky
│   │   │   ├── SectionBlock.tsx    # Bloco de secao generico
│   │   │   └── StepCard.tsx        # Card de passo
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Botao padrao (primary/secondary/ghost)
│   │   │   ├── SectionWrapper.tsx  # Container de secao com padding/max-width
│   │   │   ├── Badge.tsx           # Tag/badge (ex: BETA, NOVO)
│   │   │   ├── Accordion.tsx       # FAQ accordion
│   │   │   ├── CookieBanner.tsx    # Banner de consentimento
│   │   │   └── ScrollToTop.tsx     # Botao voltar ao topo
│   │   └── three/
│   │       ├── CoinModel.tsx       # Moeda 3D (geometria + material)
│   │       ├── ChartBar.tsx        # Barra de grafico 3D
│   │       ├── ParticleField.tsx   # Particulas douradas ambient
│   │       └── SceneLighting.tsx   # Setup de luzes + bloom
│   ├── lib/
│   │   ├── constants.ts           # Links, e-mail, social, textos fixos
│   │   ├── metadata.ts            # generateMetadata helpers
│   │   └── motion-variants.ts     # Variants reutilizaveis do Motion
│   └── styles/
│       └── globals.css            # @tailwind directives + CSS custom properties
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── _handoff/
│   ├── 00-briefing.md
│   ├── 01-arquitetura.md          # Este arquivo
│   └── ...
└── _testes/
```

---

## 2. Arvore de Componentes (hierarquia de renderizacao)

### Home (`/`)
```
RootLayout
├── Header
├── main
│   ├── HeroSection
│   │   ├── HeroScene (dynamic, ssr:false) OU HeroFallback
│   │   ├── h1 + subtitle
│   │   └── CTA Button
│   ├── ProblemSection
│   ├── SolutionSection (3 passos)
│   ├── HighlightsSection (6x FeatureCard)
│   ├── AboutSection
│   ├── PricingSection (2 cards de plano)
│   └── ContactFaqSection (mailto form + 6x Accordion)
├── Footer
└── CookieBanner (fixed bottom, condicional)
```

### Como usar (`/como-usar`)
```
RootLayout
├── Header
├── main (grid 2 colunas em desktop)
│   ├── SidebarNav (sticky left, hidden mobile)
│   └── article
│       └── 13x SectionBlock (com id para ancora)
├── Footer
└── CookieBanner
```

### Paginas legais (`/privacidade`, `/termos`, `/cookies`)
```
RootLayout
├── Header
├── main
│   └── article (prose styling)
├── Footer
└── CookieBanner
```

---

## 3. Design System Tokens

### Tailwind Config (`tailwind.config.ts`)

```ts
const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          gold: '#D4AF37',
          'gold-hover': '#C9A030',
          'gold-subtle': '#D4AF3720', // 12% opacity para backgrounds
          offwhite: '#F5F5F0',
          cream: '#FAFAF7',
          dark: '#1A1A1A',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h2': ['2.25rem', { lineHeight: '1.2' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '6rem',       // Padding vertical entre secoes
        'section-sm': '4rem',    // Mobile
      },
      borderRadius: {
        'soft': '0.75rem',
        'card': '1rem',
        'pill': '9999px',
      },
      maxWidth: {
        'content': '72rem',      // 1152px
        'narrow': '48rem',       // 768px (paginas de texto)
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(212,175,55,0.12)',
        'glow': '0 0 30px rgba(212,175,55,0.15)',
      },
    },
  },
}
```

### CSS Custom Properties (`globals.css`)

```css
:root {
  --color-brand-black: #0A0A0A;
  --color-brand-gold: #D4AF37;
  --color-brand-offwhite: #F5F5F0;
  --color-brand-cream: #FAFAF7;
  --color-brand-dark: #1A1A1A;
  --radius-soft: 0.75rem;
  --radius-card: 1rem;
  --transition-base: 200ms ease;
  --transition-slow: 500ms ease;
}
```

### Tipografia
- **Font:** Plus Jakarta Sans (via `next/font/google`)
- **Weights:** 400 (body), 500 (subheadings), 600 (headings), 700 (display/CTA)
- **Display:** 4rem / 3rem mobile
- **H2 de secao:** 2.25rem / 1.75rem mobile
- **Body:** 1.0625rem (17px) para leitura confortavel
- **Espacamento entre secoes:** 96px desktop, 64px mobile

---

## 4. Layout do Heroi 3D (React Three Fiber)

### Conceito visual
Composicao financeira abstrata: 3 moedas douradas em disposicao triangular flutuando + 3 barras de grafico ascendente atras + campo de particulas ambient. Estilo: clean, low-poly suave, brilho quente.

### Implementacao tecnica

**Canvas setup:**
- `<Canvas>` dentro de `<Suspense fallback={<HeroFallback />}>`
- Camera: `fov={45}`, position `[0, 0, 8]`
- `dpr={[1, 1.5]}` (limitar DPR para performance)
- `gl={{ antialias: true, alpha: true }}` (fundo transparente)

**CoinModel (3x instancias, posicoes diferentes):**
- Geometria: `CylinderGeometry(1, 1, 0.15, 32)` — disco achatado
- Material: `MeshStandardMaterial` com `color: #D4AF37`, `metalness: 0.7`, `roughness: 0.3`
- Na face: texto "F" gravado via `TextGeometry` ou decal plano
- Animacao: `useFrame` → rotacao Y lenta (0.003 rad/frame) + flutuacao senoidal no Y (amplitude 0.2, periodo 4s)
- Posicoes: `[-2, 0.5, 0]`, `[1.5, -0.3, -1]`, `[0.5, 1.2, -2]`
- Escala variada: 1.0, 0.7, 0.5

**ChartBar (3 barras, alturas crescentes):**
- Geometria: `BoxGeometry(0.4, altura, 0.4)` com `borderRadius` via buffer manipulation ou `RoundedBox` do drei
- Alturas: 1.5, 2.5, 3.5 (crescente = ascensao financeira)
- Material: `MeshStandardMaterial`, cor dourada com opacity gradiente (mais opaco na base)
- Posicao: atras das moedas (`z: -3`), lado direito
- Animacao: entrada com scale Y de 0 a 1 (onMount, spring)

**ParticleField:**
- 80-120 pontos dourados (Points + PointsMaterial)
- Distribuicao: esfera de raio 5
- Tamanho: 0.02-0.05 (pequenos, ambient)
- Animacao: drift lento aleatorio via `useFrame` (velocidade < 0.001)
- Opacity: 0.4 (sutis)

**SceneLighting:**
- `ambientLight` intensity 0.3
- `pointLight` position `[5, 5, 5]` intensity 1.0 color `#D4AF37` (tom dourado)
- `pointLight` position `[-3, -2, 4]` intensity 0.5 color `#FFFFFF`
- Bloom via `@react-three/postprocessing`: `EffectComposer` + `Bloom` com `intensity: 0.3`, `luminanceThreshold: 0.8`

**Fallback (mobile / reduced-motion / sem WebGL):**
- `HeroFallback.tsx`: imagem estatica SVG/PNG do conceito 3D (pre-renderizada)
- Detectar: `matchMedia('(prefers-reduced-motion: reduce)')` + feature detect WebGL + viewport < 768px
- Transicao suave: opacity 0→1

### Degradacao elegante
1. Desktop com WebGL + sem reduced-motion → 3D completo
2. Mobile OU reduced-motion → fallback estatico (imagem)
3. Sem WebGL (raro) → fallback estatico

---

## 5. Estrategia de Animacao (Motion / Framer Motion)

### Variants reutilizaveis (`motion-variants.ts`)

```ts
// Fade up (padrao para elementos entrando)
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Fade in (sem deslocamento)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

// Scale up (cards)
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

// Slide from left (sidebar, indice)
export const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}
```

### Onde aplicar

| Secao | Efeito | Trigger |
|-------|--------|---------|
| Hero h1 + subtitle | fadeUp com delay entre eles | onMount (imediato) |
| Hero CTA | fadeUp delay 0.6s | onMount |
| Problema | fadeUp | whileInView (once) |
| Solucao (3 passos) | staggerContainer + fadeUp filhos | whileInView |
| Destaques (6 cards) | staggerContainer + scaleUp filhos | whileInView |
| Sobre | fadeIn | whileInView |
| Precos (2 cards) | staggerContainer + fadeUp | whileInView |
| FAQ accordions | altura animada (AnimatePresence) | onClick |
| Header | slide down + blur bg on scroll | onScroll |
| Cards hover | scale 1.02 + shadow-glow | whileHover |

### Parallax suave
- Apenas no Hero: elementos de texto com `useTransform` vinculado ao scrollY
- Velocidades: h1 = 0.3x, subtitle = 0.2x, 3D canvas = 0x (fixo)
- Desativar se `prefers-reduced-motion`

### `prefers-reduced-motion`
- Hook `useReducedMotion()` do `framer-motion`
- Quando ativo: TODAS as variants retornam `transition: { duration: 0 }`
- 3D substituido pelo fallback estatico
- Parallax desativado

---

## 6. Estrutura do Indice Lateral — Pagina "Como usar"

### Layout
- Desktop (>=1024px): grid `grid-cols-[280px_1fr]`. Sidebar sticky (`top: 5rem`, `max-height: calc(100vh - 6rem)`, overflow-y auto).
- Tablet (768-1023px): sidebar colapsavel no topo (disclosure/accordion).
- Mobile (<768px): sem sidebar. Botao "Indice" fixo no bottom que abre drawer.

### Secoes (13 itens com ancoras)

```
1. visao-geral          — O que e o FinanceFlow
2. primeiros-passos     — Criando sua conta
3. painel-principal     — Entendendo o painel
4. contas               — Contas pessoais e empresariais
5. categorias           — As 106 categorias prontas
6. lancamentos          — Registrando receitas e despesas
7. recorrencia          — Lancamentos recorrentes e parcelados
8. orcamentos           — Criando e acompanhando orcamentos
9. metas                — Definindo metas financeiras
10. relatorios          — Visualizando seus relatorios
11. exportacao          — Exportando para planilha
12. instalar-celular    — Instalando no celular (PWA)
13. conta-seguranca     — Senha, e-mail e seguranca
```

### Comportamento
- Scroll spy: destaca o item ativo no indice conforme scroll (IntersectionObserver)
- Click no item: smooth scroll ate a secao (`scroll-behavior: smooth` + offset para header fixo)
- Indicador visual: barra dourada lateral no item ativo + texto bold
- Transicao entre items: Motion `layoutId` na barra

---

## 7. Banner de Cookies

### Componente: `CookieBanner.tsx`

**Estado:**
- Verifica `localStorage.getItem('ff-cookie-consent')`
- Se `null` → mostra banner
- Se `'accepted'` ou `'rejected'` → nao mostra

**UI:**
- Posicao: `fixed bottom-0 inset-x-0`, z-50
- Fundo: `brand-black` com borda top dourada sutil
- Layout: texto a esquerda, 2 botoes a direita
- Texto: "Usamos cookies para melhorar sua experiencia. Saiba mais na nossa [Politica de Cookies](/cookies)."
- Botao primario: "Aceitar" → `localStorage.setItem('ff-cookie-consent', 'accepted')`
- Botao secundario (ghost): "Recusar" → `localStorage.setItem('ff-cookie-consent', 'rejected')`
- Entrada: slide up + fade (Motion AnimatePresence)
- Saida: slide down + fade

**Detalhes tecnicas:**
- Componente client (`'use client'`)
- `useEffect` para ler localStorage (evitar hydration mismatch)
- Estado inicial: `null` (nao renderiza nada ate verificar)
- Nao bloqueia scroll
- Mobile: layout empilhado (texto em cima, botoes em baixo full-width)
- Nao carrega analytics/tracking nenhum (site sem backend) — banner e apenas pro compliance visual e informativo

---

## 8. Estrategia de Performance

### Problema central
3D (React Three Fiber + Three.js + postprocessing) e pesado (~200-400KB gzipped). Precisa garantir LCP < 2.5s.

### Solucoes implementadas

**1. Dynamic import com ssr:false**
```tsx
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <HeroFallback />
})
```
O 3D NAO entra no bundle SSR. O LCP e medido pelo texto do hero (h1 + CTA) que renderiza imediatamente. O canvas 3D carrega DEPOIS, sem bloquear.

**2. Fallback imediato**
O `<HeroFallback>` renderiza um gradiente/SVG leve instantaneamente. Quando o 3D carrega, substitui com fade.

**3. Limitar DPR**
`dpr={[1, 1.5]}` no Canvas — nao renderizar em 2x/3x (economiza GPU massivamente).

**4. Nao usar 3D no mobile**
Viewport < 768px → nem carrega o dynamic import. Usa HeroFallback direto. Isso elimina download do Three.js no mobile.

**5. Fontes otimizadas**
```tsx
import { Plus_Jakarta_Sans } from 'next/font/google'
const font = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' })
```
`display: swap` garante texto visivel imediato.

**6. Imagens**
- `next/image` com `priority` na hero image (se houver)
- Formatos: WebP/AVIF automaticos via Next.js
- Sizes corretos para cada breakpoint

**7. Bundle splitting**
- Cada pagina e um route segment (code splitting automatico do App Router)
- Componentes pesados (Accordion, 3D) sao lazy

**8. Pre-connect**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
```
(Desnecessario com next/font, mas util se usar Pexels images)

**9. Lighthouse budget**
- JS total da Home: < 300KB gzipped (sem Three.js) + Three.js lazy
- CSS: < 30KB (Tailwind purgado)
- Fonts: < 50KB (subset latin)

### Medicao
O engenheiro-qualidade roda Lighthouse CI no preview. Falha se LCP > 2.5s em 3G simulado.

---

## 9. Dependencias (package.json)

```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@react-three/fiber": "^9.0.0",
    "@react-three/drei": "^10.0.0",
    "@react-three/postprocessing": "^3.0.0",
    "three": "^0.170.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.470.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/three": "^0.170.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "postcss": "^8.5.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.1.0"
  }
}
```

**Notas sobre versoes:**
- Tailwind 4 usa o novo engine (CSS-first config). Se a equipe preferir Tailwind 3 com `tailwind.config.ts` classico, trocar para `"tailwindcss": "^3.4.0"` + `"autoprefixer"`.
- `@react-three/postprocessing` v3 e compativel com R3F v9.
- `framer-motion` v12 suporta React 19.

---

## 10. Skills Exigidas por Este Projeto

| Skill | Justificativa |
|-------|---------------|
| `design-taste` | Anti-slop, dials, pre-flight visual — obrigatoria para qualquer projeto com tela |
| `3d-frontend` | Heroi 3D com R3F (bloom, materiais, animacao) |
| `frontend-design` | Componentes, layout, responsividade |
| `contexto-projeto` | CLAUDE.md do projeto |
| `principios-decisao` | Esta arquitetura |
| `copywriting` | Copy persuasiva das secoes (etapa paralela) |

---

## 11. Decisoes de Arquitetura (justificativas)

| Decisao | Por que |
|---------|---------|
| SSG (Static Site Generation) | Site sem dados dinamicos. Build gera HTML estatico, CDN serve. Maximo de performance. |
| App Router (nao Pages) | Padrao Next.js 15. Server Components por default, streaming, melhor DX. |
| 3D lazy + fallback mobile | Three.js e grande. Nao pode penalizar mobile nem LCP. |
| Plus Jakarta Sans (nao Inter) | Mais acolhedora/arredondada que Inter, alinhada com o tom "amigavel" do produto. |
| Sem CMS | 5 paginas estaticas, conteudo muda raramente. CMS seria over-engineering. |
| localStorage para cookies | Sem backend, sem analytics — banner e compliance visual. Nao precisa de server cookie. |
| Tailwind 4 | Projeto novo, sem legado. Aproveitar o novo engine. Se der atrito, fallback para v3. |

---

## 12. SEO e Metadata

### Metadata por pagina

| Pagina | Title | Description |
|--------|-------|-------------|
| Home | FinanceFlow — Controle financeiro para autonomos e MEIs | Separe suas financas pessoais das do negocio. App simples para autonomos, MEIs e freelancers organizarem receitas, despesas, orcamentos e metas. |
| Como usar | Como usar o FinanceFlow — Guia completo | Aprenda a usar o FinanceFlow passo a passo: cadastro, lancamentos, orcamentos, metas e exportacao. |
| Privacidade | Politica de Privacidade — FinanceFlow | Como o FinanceFlow coleta, usa e protege seus dados pessoais. Conforme LGPD. |
| Termos | Termos de Uso — FinanceFlow | Termos e condicoes de uso do aplicativo FinanceFlow. |
| Cookies | Politica de Cookies — FinanceFlow | Como o FinanceFlow utiliza cookies e tecnologias semelhantes. |

### Extras
- `sitemap.xml` gerado via `next-sitemap` ou manualmente em `public/`
- `robots.txt`: allow all, referencia ao sitemap
- Structured data (JSON-LD) na Home: `SoftwareApplication` + `FAQPage`
- Open Graph image: 1200x630, fundo escuro com logo dourado

---

## 13. Responsividade (breakpoints)

| Breakpoint | Comportamento principal |
|------------|------------------------|
| < 640px (mobile) | 1 coluna, menu hamburger, sem 3D, font sizes reduzidos |
| 640-767px (sm) | 1-2 colunas, sem 3D |
| 768-1023px (md) | 2 colunas, sidebar colapsavel, sem 3D |
| >= 1024px (lg) | Layout completo, sidebar sticky, 3D ativo |
| >= 1280px (xl) | Max-width content, mais respiro |

---

*Documento gerado pelo arquiteto em 2026-07-10. Proximo passo: construtor implementa baseado nesta spec.*
