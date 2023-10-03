import React from "react";
// import services from "../../../assets/service.json";
import physicalThearpy from "../../../assets/images/physicalTherapy.png";
import cupping from "../../../assets/images/cupping.svg";
import acupuncture from "../../../assets/images/acupuncture.svg";
import gauSha from "../../../assets/images/gauSha.svg";
import SectionHeader from "../sectionHeader/SectionHeader";

const Service = () => {
  const services = [
    { label: "Physiotherapy", icon: physicalThearpy },
    { label: "Acupuncture Therapy", icon: acupuncture },
    { label: "Gua Sha Therapy", icon: gauSha },
    { label: "Cupping", icon: cupping },
  ];
  return (
    <section className="container" id="service">
      <SectionHeader title={"our service"} />
      <div id="serviceWrapper">
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.icon} alt="service logo" />
            <h3>{service.label}</h3>
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
