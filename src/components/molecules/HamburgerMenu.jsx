import { memo, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'

const HamburgerMenu = memo(function HamburgerMenu() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t('menu.open')}
        aria-expanded={open}
        className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer transition hover:bg-gray-100"
      >
        {open
          ? <XMarkIcon className="w-6 h-6 text-gray-600" />
          : <Bars3Icon className="w-6 h-6 text-gray-600" />
        }
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 min-w-36 z-20">
          <p className="text-2xs text-gray-400 mb-2">{t('menu.language')}</p>
          <LanguageSwitcher onSelect={() => setOpen(false)} />
        </div>
      )}
    </div>
  )
})

export default HamburgerMenu
