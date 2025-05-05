import React from 'react'
import Silder from './assets/components/Silder'
import Nav from './assets/components/nav'
import Home from './assets/components/Home'

const App = () => {
  return (
    <div className='bg-purple-100 flex flex-row '>
      <Silder />

      <div className="flex flex-col">
      <Nav/>
      <Home/>
      

      </div>

      
    </div>
  )
}

export default App
