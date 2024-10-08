import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}