import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center" id="sectionHeader">
      <h3 className="capitalize">{title}</h3>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br />
        industry. Lorem Ipsum the industry&rsquo;s standard dummy text.
      </p>
    </div>
  );
};

export default SectionHeader;
