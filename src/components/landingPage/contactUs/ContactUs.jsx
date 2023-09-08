import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import PrimaryInput from "../inputs/primaryInput/PrimaryInput";
import shape1 from "../../../assets/images/shape1.svg";

const ContactUs = () => {
  return (
    <section className="container relative m-auto" id="contactUs">
      <SectionHeader title={"book an appointment"} />
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <img src={shape1} alt="" />
      </div>
      <form className="max-w-[1100px] mx-auto my-12">
        <div className="grid grid-cols-2 gap-11 ">
          <PrimaryInput />
          <PrimaryInput />
          <PrimaryInput />
          <PrimaryInput />
        </div>
        <div className="primary-textInput my-11">
          <label>message</label>
          <textarea name="" cols="30" rows="5"></textarea>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
