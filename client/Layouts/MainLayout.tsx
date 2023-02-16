import { Footer, Header } from '@/components'
import { ReactElement } from 'react'

interface IMainLayout {
  children: ReactElement
}

const MainLayout = ({ children }: IMainLayout): JSX.Element => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
