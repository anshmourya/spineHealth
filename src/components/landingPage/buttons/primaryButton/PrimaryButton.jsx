import React from "react";

const PrimaryButton = ({ title, size }) => {
  return (
    <button
      className={`p-2 text-${
        size || "sm"
      } text-white capitalize rounded-md primary-bg`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
