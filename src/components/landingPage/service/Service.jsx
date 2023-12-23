import React from 'react'
// import services from "../../../assets/service.json";
import physicalThearpy from '../../../assets/images/physicalTherapy.png'
import cupping from '../../../assets/images/cupping.svg'
import acupuncture from '../../../assets/images/acupuncture.svg'
import gauSha from '../../../assets/images/gauSha.svg'
import SectionHeader from '../sectionHeader/SectionHeader'

const Service = () => {
  const services = [
    {
      label: 'Physiotherapy',
      icon: physicalThearpy,
      description:
        'Restore movement and function with tailored exercises, manual therapy, and expert guidance.',
    },
    {
      label: 'Acupuncture Therapy',
      icon: acupuncture,
      description:
        'Stimulate healing and relieve pain with precise placement of fine needles along energy pathways.',
    },
    {
      label: 'Gua Sha Therapy',
      icon: gauSha,
      description:
        'Promote circulation, reduce inflammation, and ease muscle tension with gentle scraping techniques.',
    },
    {
      label: 'Cupping',
      icon: cupping,
      description:
        'Relax muscles, improve blood flow, and release toxins by creating suction on the skin using cups.',
    },
  ]
  return (
    <section className="container" id="service">
      <SectionHeader title={'our service'} />
      <div id="serviceWrapper" className="cursor-pointer">
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.icon} alt="service logo" />
            <h3>{service.label}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
