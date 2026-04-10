import { memo } from 'react'
import clsx from 'clsx'

const base = [
  'flex-1 min-w-0 px-3.5 py-2.5',
  'border border-gray-300 rounded-lg text-base',
  'outline-none transition',
  'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
].join(' ')

const Input = memo(function Input({ value, onChange, placeholder, type = 'text', className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(base, className)}
    />
  )
})

export default Input
