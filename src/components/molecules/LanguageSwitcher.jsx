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
    <div className="language-switcher">
      {LANGUAGES.map(({ code, label }) => (
        <Button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`language-button ${i18n.language === code ? 'active' : ''}`}
        >
          {label}
        </Button>
      ))}
    </div>
  )
})

export default LanguageSwitcher
