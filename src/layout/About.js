import React, { useEffect } from 'react'
import AboutBanner from '../components/AboutBanner'
import Aboutus from '../components/Aboutus'
import AboutusTeam from '../components/AboutusTeam'
import AboutusWeOffer from '../components/AboutusWeOffer'

const About = () => {

  useEffect(() => {
    document.title = "About Us - 42-cards"
  })

  return (
    <div>
      <AboutBanner />
      <Aboutus />
      <AboutusWeOffer />
      <AboutusTeam />
    </div>
  )
}

export default About