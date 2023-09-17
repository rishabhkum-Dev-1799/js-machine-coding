import React from 'react'
import { InfiniteScroll } from './machinecoding'
import './Globals.css'
import Header from './heading/Header'

const App = () => {
  return (
    <>
    <Header/>
    {/* Here add the machinecoding folder name which you want to see or run  */}
    <InfiniteScroll/>
    </>
  )
}

export default App