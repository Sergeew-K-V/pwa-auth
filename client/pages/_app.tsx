import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from 'Layouts/MainLayout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  if (pathname === '/auth' || pathname === '/register') {
    return <Component {...pageProps} />
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
