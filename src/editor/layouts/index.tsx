import { Alloement } from 'allotment'
import "allotment/dist/style.css"

import React from 'react'

import Header from './header'

const Layouts: React.FC = () => {
  return (
    <div className="h-[-100vh] flex flex-col">
        <div className='h-[50px] flex items-center border-solid border-[1px] border-[#ccc]'>
            <Header />
        </div>
    </div>
  )
}
export default Layouts