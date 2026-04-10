import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const TodoCount = memo(function TodoCount({ remaining, total }) {
  const { t } = useTranslation()
  return (
    <p className="todo-count">{t('count', { remaining, total })}</p>
  )
})

export default TodoCount
