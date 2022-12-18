import React from 'react'
import Socialblock from './components/Socialblock'
import Aboutblock from './components/Aboutblock'
import Mainblock from './components/Mainblock'

export default function App() {
  return (
    <div className='wrapper'>
      <div className="snow">
        <Socialblock />
        <Aboutblock />
        <Mainblock />
      </div>
    </div>
  )
}