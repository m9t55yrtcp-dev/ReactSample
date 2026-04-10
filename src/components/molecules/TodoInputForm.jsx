import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const TodoInputForm = memo(function TodoInputForm({ onAdd }) {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')

  const handleChange = useCallback((e) => setInputValue(e.target.value), [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setInputValue('')
  }, [inputValue, onAdd])

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder={t('placeholder')}
        className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-300 rounded-lg text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />
      <Button
        type="submit"
        className="shrink-0 px-4 py-2.5 bg-blue-500 text-white rounded-lg text-base cursor-pointer transition hover:bg-blue-600 whitespace-nowrap sm:px-5"
      >
        {t('add')}
      </Button>
    </form>
  )
})

export default TodoInputForm
