import { memo } from 'react'

const Checkbox = memo(function Checkbox({ checked, onChange, className }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={className}
    />
  )
})

export default Checkbox
