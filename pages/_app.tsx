import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-gradient-to-bl from-[#76311D] to-[#080808] via-[#111212] flex flex-col justify-between min-h-screen'>
      <div>
        <Navbar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  ) 
}
