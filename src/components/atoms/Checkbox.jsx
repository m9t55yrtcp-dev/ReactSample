import { memo } from 'react'
import clsx from 'clsx'

const base = 'w-[18px] h-[18px] shrink-0 cursor-pointer accent-blue-500'

const Checkbox = memo(function Checkbox({ checked, onChange, className }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={clsx(base, className)}
    />
  )
})

export default Checkbox
