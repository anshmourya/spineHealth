import React from "react";
import physicalThearpy from "../../../assets/images/physicalTherapy.png";
import SectionHeader from "../sectionHeader/SectionHeader";

const Service = () => {
  return (
    <section className="container" id="service">
      <SectionHeader title={"our service"} />
      <div id="serviceWrapper">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="">
            <img src={physicalThearpy} alt="service logo" />
            <h3>physiotherapy</h3>
            <p>
              Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
              inc ididunt utid labore.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
