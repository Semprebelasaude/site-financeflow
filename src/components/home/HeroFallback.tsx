export default function HeroFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      {/* Gradiente dourado abstrato */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute w-48 h-48 rounded-full bg-brand-gold/10 blur-2xl" />
      </div>

      {/* Elemento central */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Moedas estilizadas */}
        <div className="relative">
          {/* Moeda principal */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-hover border-4 border-brand-gold/30 flex items-center justify-center shadow-glow">
            <span className="text-4xl font-bold text-brand-black">F</span>
          </div>
          {/* Moeda menor - direita */}
          <div className="absolute -right-8 top-4 w-16 h-16 rounded-full bg-gradient-to-br from-brand-gold/70 to-brand-gold-hover/70 border-2 border-brand-gold/20 flex items-center justify-center opacity-80">
            <span className="text-lg font-bold text-brand-black">$</span>
          </div>
          {/* Moeda menor - esquerda */}
          <div className="absolute -left-6 bottom-2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold/50 to-brand-gold-hover/50 border-2 border-brand-gold/15 flex items-center justify-center opacity-60">
            <span className="text-sm font-bold text-brand-black">₢</span>
          </div>
        </div>

        {/* Barras de gráfico */}
        <div className="flex items-end gap-2 h-20">
          <div className="w-6 bg-brand-gold/30 rounded-t-sm" style={{ height: '40%' }} />
          <div className="w-6 bg-brand-gold/50 rounded-t-sm" style={{ height: '65%' }} />
          <div className="w-6 bg-brand-gold/70 rounded-t-sm" style={{ height: '85%' }} />
          <div className="w-6 bg-brand-gold rounded-t-sm" style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  )
}
