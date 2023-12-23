import React from 'react'

const SecondaryButton = ({ label, handelClick, ...rest }) => {
  return (
    <button className="secondaryButton" onClick={handelClick} {...rest}>
      {label}
    </button>
  )
}

export default SecondaryButton
