import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../atoms/Button'

const LANGUAGES = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
]

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-1.5 shrink-0">
      {LANGUAGES.map(({ code, label }) => (
        <Button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          variant="ghost"
          active={i18n.language === code}
        >
          {label}
        </Button>
      ))}
    </div>
  )
})

export default LanguageSwitcher
