import React, { useEffect } from 'react'
import ContactBanner from '../components/ContactBanner'
import Contactus from '../components/Contactus'

const Contact = () => {

  useEffect(() => {
    document.title = "Contact - 42-cards"
  })
  
  return (
    <div>
      <ContactBanner />
      <Contactus />
    </div>
  )
}

export default Contact