import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Home , Header} from './Index'

function RootApp() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default RootApp