import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const TodoCount = memo(function TodoCount({ remaining, total }) {
  const { t } = useTranslation()
  return (
    <p className="text-2xs text-gray-400 mb-3 text-right">
      {t('count', { remaining, total })}
    </p>
  )
})

export default TodoCount
