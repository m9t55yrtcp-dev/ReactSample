import { memo, useState } from 'react'
import { ClipboardDocumentListIcon, Bars3Icon } from '@heroicons/react/24/outline'
import HamburgerMenu from '../molecules/HamburgerMenu'
import Sidebar from '../organisms/Sidebar'

const styles = {
  header: [
    'sticky top-0 z-10 bg-white border-b border-gray-200',
    'px-4 py-3 flex items-center justify-between gap-3',
    'sm:px-6',
  ].join(' '),
  title: [
    'text-xl font-bold text-[#1a1a2e] tracking-tight whitespace-nowrap',
    'sm:text-title',
  ].join(' '),
  main: [
    'flex-1 w-full max-w-2xl mx-auto',
    'px-4 pt-5 pb-10',
    'sm:px-6 sm:pt-8 sm:pb-16',
    'lg:max-w-3xl lg:px-0 lg:pt-12 lg:pb-20',
  ].join(' '),
}

const MainTemplate = memo(function MainTemplate({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className={styles.header}>
        <div className="flex items-center gap-1">
          {/* モバイルのみ: サイドバーを開くボタン */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-md text-gray-600 cursor-pointer transition hover:bg-gray-100"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <h1 className={styles.title}>
            <ClipboardDocumentListIcon className="inline-block w-6 h-6 mr-2 mb-0.5 text-brand" />
            {title}
          </h1>
        </div>
        <HamburgerMenu />
      </header>

      <div className="flex flex-1">
        <Sidebar
          open={sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
          onClose={() => setSidebarOpen(false)}
        />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
})

export default MainTemplate
