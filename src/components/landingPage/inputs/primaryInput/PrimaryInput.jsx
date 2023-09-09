import React, { forwardRef } from "react";

const PrimaryInput = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="primary-input">
      <label>{label}</label>
      <input type="text" ref={ref} {...rest} />
    </div>
  );
});

PrimaryInput.displayName = "PrimaryInput";

export default PrimaryInput;
