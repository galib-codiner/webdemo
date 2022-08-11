import React, { useEffect } from 'react'
import ServiceBanner from '../components/ServiceBanner'
import ServiceBenifits from '../components/ServiceBenifits'
import ServiceList from '../components/ServiceList'
import ServiceValue from '../components/ServiceValue'

const Services = () => {

  useEffect(() => {
    document.title = "Services - 42-cards"
  })

  return (
    <div>
      <ServiceBanner />
      <ServiceValue />
      <ServiceList />
      <ServiceBenifits />
    </div>
  )
}

export default Services