import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juris Advocacia',
  description: 'Criado por Samuel Drumond',
  generator: 'Samuel Drumond',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
