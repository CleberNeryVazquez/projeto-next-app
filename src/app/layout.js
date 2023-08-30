import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cleber Portfolio',/* este é o titulo da aba de navegacao */
  description: 'Pagina inicial do Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
            <Navbar />
            {children}
            <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
