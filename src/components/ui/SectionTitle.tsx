interface SectionTitleProps {
  overline?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
  light = false,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textColor = light ? 'text-white' : 'text-navy-900'
  const overlineColor = light ? 'text-white/60' : 'text-crimson'
  const subtitleColor = light ? 'text-white/70' : 'text-navy-600'

  return (
    <div className={`${alignClass} max-w-2xl ${className}`}>
      {overline && (
        <p
          className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-2 ${
            align === 'center' ? 'justify-center' : ''
          } ${overlineColor}`}
        >
          <span className="inline-block w-6 h-px bg-current opacity-60" />
          {overline}
          <span className="inline-block w-6 h-px bg-current opacity-60" />
        </p>
      )}
      <h2
        className={`font-display text-5xl sm:text-6xl leading-none tracking-wide ${textColor}`}
        style={{ lineHeight: '1' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-base sm:text-lg leading-relaxed mt-4 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
