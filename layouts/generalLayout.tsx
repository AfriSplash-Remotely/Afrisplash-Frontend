import { NextPage } from 'next'
import Footer from '../components/molecules/Footer/Footer'
import Navigation from '../components/molecules/Navigation/Navigation'

interface GeneralProps{
    children: React.ReactNode
}

const GeneralLayout: NextPage<GeneralProps>=({children})=> {
  return (
    <div className="w-screen">
      <Navigation />
        {children}
      <Footer />
    </div>
  )
}

export default GeneralLayout;
