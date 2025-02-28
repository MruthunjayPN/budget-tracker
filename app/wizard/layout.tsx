import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='realive flex h-screen w-full flex-col justify-center items-center'>{children}</div>
  )
}

export default layout