import React, { useEffect, useState } from "react";

//assets

import shape2 from "../../assets/images/shape2.svg";

//hooks
//components
import TopHeader from "../../components/landingPage/navbar/topHeader/TopHeader";
import MainHeader from "../../components/landingPage/navbar/mainHeader/MainHeader";
import SectionHeader from "../../components/landingPage/sectionHeader/SectionHeader";
import HeroSection from "../../components/landingPage/heroSection/HeroSection";
import Service from "../../components/landingPage/service/Service";
import AboutUs from "../../components/landingPage/aboutUs/AboutUs";
import ContactUs from "../../components/landingPage/contactUs/ContactUs";
import MainFooter from "../../components/landingPage/mainFooter/MainFooter";
const Home = () => {
  //hooks
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 80 ? setFixedNav(true) : setFixedNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener using the same function reference
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <div className="h-screen" id="home">
        <header>
          <TopHeader fixedNav={fixedNav} />
          <MainHeader fixedNav={fixedNav} />
        </header>
        {/* //hero section */}
        <HeroSection />
      </div>

      {/* //who we are */}
      <section
        id="knowUs"
        className="my-16"
        // data-aos-duration="1500"
      >
        <SectionHeader title={"who are we"} />
        <img src={shape2} alt="" />
        <div className="container h-full m-auto" id="knowUs-wrapper">
          <div>
            <h2>
              Welcome to Physio Therapy & Acupuncture Clinic.
              <span className="highlight-text"> Welcome to Spine Health.</span>
            </h2>
            <p>
              Dr. Ram N. Kushwaha&rsquo;s Clinic, situated in Kandivali (E), and
              is considered one of the pioneering Orthopedic, Cupping treatment
              and Weight lose clinics in Mumbai.Here you will meet Dr. Ram N.
              Kushwaha and his patient-friendly staff who have dedicated
              themselves to help patients get the best orthopedic care for their
              bone and joint problems.
            </p>
            <br />
            <p>
              Good health is difficult to define, but it is certainly more then
              just the absence of disease. It reflects state of mental, social
              and physical fitness and well being strength, Endurance,
              flexibility and proper weight are important elements of all around
              fitness and good health.
            </p>
            <div id="avatar"></div>
          </div>
          <div className="text-center" id="timeTable">
            <div className="border rounded-md timeTable-wrapper">
              <h3>Weekly Timetable</h3>
              <ul>
                {dayNames.map((day, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between "
                  >
                    <div className="day">{day}</div>
                    <div className="time">10:00am–8:00pm</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* //our services */}
      <Service />
      {/* // About us section */}
      <AboutUs />
      {/* // contact us */}
      <ContactUs />

      <MainFooter />
    </>
  );
};

export default Home;
