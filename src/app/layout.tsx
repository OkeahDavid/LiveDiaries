// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'LiveDiaries Landing Page',
  description: 'Welcome to LiveDiaries - Your personal digital diary and book management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}