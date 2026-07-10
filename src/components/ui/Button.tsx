import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  children: React.ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  external,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black'

  const variants = {
    primary:
      'bg-brand-gold text-brand-black px-8 py-3.5 hover:bg-brand-gold-hover hover:shadow-glow active:scale-95',
    secondary:
      'border border-brand-gold/50 text-brand-gold px-8 py-3.5 hover:bg-brand-gold/10 hover:border-brand-gold active:scale-95',
    ghost: 'text-brand-offwhite/70 px-4 py-2 hover:text-brand-offwhite',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
