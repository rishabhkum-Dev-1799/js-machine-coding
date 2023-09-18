import React from 'react'
import { InfiniteScroll } from './machinecoding'
import './Globals.css'
import Header from './heading/Header'
import SlideShow from './machinecoding/SlideShow/SlideShow'

const App = () => {
  return (
    <>
    <Header/>
    {/* Here add the machinecoding folder name which you want to see or run  */}
    {/* <InfiniteScroll/> */}
    <SlideShow/>
    </>
  )
}

export default App