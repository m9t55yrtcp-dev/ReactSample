import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ClipboardDocumentListIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const NavContent = memo(function NavContent({ open, onClose, onToggle, t }) {
  return (
    <>
      {/* ヘッダー */}
      <div className={clsx(
        'flex items-center border-b border-gray-200 h-[57px] px-3',
        open ? 'justify-end' : 'justify-center',
      )}>
        {/* モバイル: × で閉じる */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t('sidebar.toggle')}
          className="flex lg:hidden items-center justify-center w-8 h-8 rounded-md text-gray-500 cursor-pointer transition hover:bg-gray-100"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        {/* PC: chevron で開閉 */}
        <button
          type="button"
          onClick={onToggle}
          aria-label={t('sidebar.toggle')}
          className="hidden lg:flex items-center justify-center w-8 h-8 rounded-md text-gray-500 cursor-pointer transition hover:bg-gray-100"
        >
          {open
            ? <ChevronLeftIcon className="w-5 h-5" />
            : <ChevronRightIcon className="w-5 h-5" />
          }
        </button>
      </div>

      {/* ナビゲーション */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="flex flex-col gap-1">
          <li>
            <button
              type="button"
              className={clsx(
                'w-full flex items-center rounded-lg text-sm transition',
                'bg-brand/10 text-brand font-medium',
                open ? 'gap-3 px-3 py-2.5' : 'justify-center py-2.5',
              )}
            >
              <ClipboardDocumentListIcon className="w-5 h-5 shrink-0" />
              {open && <span className="whitespace-nowrap">{t('sidebar.todoList')}</span>}
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
})

const Sidebar = memo(function Sidebar({ open, onToggle, onClose }) {
  const { t } = useTranslation()

  return (
    <>
      {/* モバイル: オーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* モバイル: fixed ドロワー */}
      <aside className={clsx(
        'fixed inset-y-0 left-0 z-30 w-56',
        'bg-white border-r border-gray-200 flex flex-col',
        'transition-transform duration-300 ease-in-out',
        'lg:hidden',
        open ? 'translate-x-0' : '-translate-x-full',
      )}>
        <NavContent open={true} onClose={onClose} onToggle={onToggle} t={t} />
      </aside>

      {/* PC: in-flow アイコンバー */}
      <aside className={clsx(
        'hidden lg:flex flex-col shrink-0',
        'bg-white border-r border-gray-200 overflow-hidden',
        'transition-[width] duration-300 ease-in-out',
        open ? 'w-56' : 'w-14',
      )}>
        <NavContent open={open} onClose={onClose} onToggle={onToggle} t={t} />
      </aside>
    </>
  )
})

export default Sidebar
