import React from 'react'

const PrimaryTextarea = React.forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="primary-textInput my-11">
      <label>{label}</label>
      <textarea cols="30" rows="5" ref={ref} {...rest}></textarea>
    </div>
  )
})

PrimaryTextarea.displayName = 'PrimaryTextarea'
export default PrimaryTextarea
