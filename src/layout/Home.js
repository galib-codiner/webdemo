import React, { useEffect } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import MissionVisionValue from '../components/MissionVisionValue'
import Solutions from '../components/Solutions'

const Home = () => {

useEffect(() => {
  document.title = "Home - 42-cards"
})

  return (
    <div>
      <Banner />
      <About />
      <MissionVisionValue />
      <Solutions />
    </div>
  )
}

export default Home