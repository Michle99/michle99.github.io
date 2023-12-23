import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Provider from './libs/theme_provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Software Engineer Web Presence',
  description: 'My Web Portfolio showcasing my skills and hobbies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  )
}
