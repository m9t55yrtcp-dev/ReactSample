import { memo } from 'react'
import clsx from 'clsx'

const base = 'cursor-pointer transition whitespace-nowrap'

const variants = {
  primary: [
    'shrink-0 px-4 py-2.5 sm:px-5',
    'bg-brand text-white rounded-lg text-base',
    'hover:bg-brand-hover',
  ].join(' '),
  danger: [
    'shrink-0 px-2.5 py-1',
    'text-red-500 border border-red-500 rounded-md text-xs',
    'hover:bg-red-500 hover:text-white',
  ].join(' '),
  ghost: [
    'px-3 py-1.5 border rounded-md text-xs',
    'text-gray-500 border-gray-300',
    'hover:bg-gray-100 hover:text-gray-700',
  ].join(' '),
}

const ghostActive = 'bg-brand text-white border-brand hover:bg-brand-hover'

const Button = memo(function Button({
  children,
  onClick,
  type = 'button',
  variant = 'ghost',
  active = false,
  className,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(base, variants[variant], active && ghostActive, className)}
    >
      {children}
    </button>
  )
})

export default Button
