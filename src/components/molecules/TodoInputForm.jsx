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
    <form onSubmit={handleSubmit} className="todo-form">
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder={t('placeholder')}
        className="todo-input"
      />
      <Button type="submit" className="add-button">{t('add')}</Button>
    </form>
  )
})

export default TodoInputForm
