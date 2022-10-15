import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Learning React-Router-Dom:</h1>
    </div>
  )
}

export default Home
