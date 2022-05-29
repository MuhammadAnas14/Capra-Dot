import React from 'react'

import Footer from '../Screens/Footer/Footer'
import Header from '../Screens/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </>
  )
}
