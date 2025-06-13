import './globals.css'
import { Azeret_Mono } from 'next/font/google'

const mono = Azeret_Mono({
  weight: ['200', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'jackrvu',
  description: 'status, links, visitors, about me, posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-blue-950 bg-dot-pattern min-h-screen w-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${mono.className} bg-blue-950 bg-dot-pattern min-h-screen flex justify-center items-start w-full`}>
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl p-4 mt-12 mb-12 custom-width">
          {children}
        </div>
      </body>
    </html>
  )
}