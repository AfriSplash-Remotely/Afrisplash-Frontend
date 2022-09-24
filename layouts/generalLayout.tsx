import { NextPage } from 'next'
import Navigation from '../components/molecules/Navigation/Navigation'

interface GeneralProps{
    children: React.ReactNode
}

const GeneralLayout: NextPage<GeneralProps>=({children})=> {
  return (
    <div>
      <Navigation />
        {children}
    </div>
  )
}

export default GeneralLayout;
