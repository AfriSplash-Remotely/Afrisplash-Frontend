import { NextPage } from 'next'
import React, { FC } from 'react'

interface GeneralProps{
    children: React.ReactNode
}

const GeneralLayout: NextPage<GeneralProps>=({children})=> {
  return (
    <div>
        {children}
    </div>
  )
}

export default GeneralLayout;
