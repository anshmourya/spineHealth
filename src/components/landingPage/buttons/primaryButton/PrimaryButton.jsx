import React from "react";

const PrimaryButton = ({ title, size, hanelClick }) => {
  return (
    <button
      className={`p-2 text-${
        size || "sm"
      } text-white capitalize rounded-md primary-bg`}
      onClick={hanelClick}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
