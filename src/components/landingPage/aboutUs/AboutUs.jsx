import React from "react";
import doctor from "../../../assets/images/doctor.jpg";
import SectionHeader from "../sectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <SectionHeader title={"about us"} />
      <div className="container" id="aboutUsWrapper">
        <div>
          <img src={doctor} alt="Dr Ram N Kushwaha" />
          <h2>Dr Ram N Kushwaha</h2>
          <h5>
            DNP, BPTh., B.Sc.P.Ed, B.P.Ed, M.P.Ed, A.D.Y.Ed, M.Sc. <br /> IN
            Yoga & Live Science Yoga faculty Indian Oil.
          </h5>
        </div>
        <div className="aboutDetail">
          <h3>
            Welcome to our <span className="primary-color ">SpineHealth.</span>
          </h3>
          <p>
            Spine Health (Physiotherapy and Acupuncture clinic) is unique and
            some different kind of clinic, <br />
            which is treating the musculoskeletal and neurological ailments and
            complications with innovative <br /> treatment combination of
            Physiotherapy, Acupuncture and Chirotherapy.
          </p>
          <h6 className="highlight-text">our history.</h6>
          <p>
            The clinic is believes in good result and faithful relation with the
            client always ready to help and <br /> proper guidance related to
            their musculoskeletal and neurological problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
