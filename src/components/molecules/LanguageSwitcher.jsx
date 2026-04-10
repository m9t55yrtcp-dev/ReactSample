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
          className={`px-3 py-1.5 border rounded-md text-xs cursor-pointer transition whitespace-nowrap ${
            i18n.language === code
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-transparent text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {label}
        </Button>
      ))}
    </div>
  )
})

export default LanguageSwitcher
