import Menu from '@/components/Menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Assembleia de Deus do Araretama',
  description: 'Site desenvolvido para atender as demandas da igreja Assembleia de Deus do Araretama',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      
      <body className={inter.className}>
        <header className="app-header">
          <Menu />
        </header>
        <main className="app-main">
          {children}
        </main>
        <footer className="app-footer">
          <p>Igreja <strong>Assembleia do Araretama</strong>.</p>
          <p>Desenvolvido por <a className="nav-link" href="https://github.com/KyndermanBaraldi" target="_blank" rel="noopener noreferrer">Kynderman Baraldi</a></p>
        </footer>     
        
      </body>
    </html>
  )
}
