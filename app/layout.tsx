import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Navbar,RightSideBar,LeftSiddBar,Footer } from '@/components/shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <head>
          <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            />
        </head>
        <body className={inter.className}>
          <Navbar />
          <main className='flex'>
            <LeftSiddBar />
              <section className='flex min-h-[calc(100vh-75px)] 
              flex-1 flex-col items-center  px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'>
                <div className='w-full max-w-4xl'>
                 {children}
                </div>
              </section>
            <RightSideBar />
          </main>        
        </body>
      </html>
    </ClerkProvider>
  )
}


