import React from 'react'

const SectionHeader = ({ title }) => {
  return (
    <div className="text-center" id="sectionHeader">
      <h3 className="capitalize">{title}</h3>
    </div>
  )
}

export default SectionHeader
