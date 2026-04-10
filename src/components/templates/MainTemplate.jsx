import { memo } from 'react'
import LanguageSwitcher from '../molecules/LanguageSwitcher'

const MainTemplate = memo(function MainTemplate({ title, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between gap-3 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-[#1a1a2e] tracking-tight whitespace-nowrap sm:text-[1.375rem]">
          {title}
        </h1>
        <LanguageSwitcher />
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-5 pb-10 sm:px-6 sm:pt-8 sm:pb-16 lg:px-0 lg:pt-12 lg:pb-20">
        {children}
      </main>
    </div>
  )
})

export default MainTemplate
