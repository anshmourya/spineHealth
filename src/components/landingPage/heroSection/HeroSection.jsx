import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import shape1 from '../../../assets/images/shape1.svg'

import PrimaryButton from '../buttons/primaryButton/PrimaryButton'
import { Link } from 'react-scroll'

const HeroSection = () => {
  const el = useRef(null)
  //typing text animation
  useEffect(() => {
    // Create a Typed instance here
    const typed = new Typed(el.current, {
      strings: [
        'Physio Therapy.',
        'Acupuncture.',
        'Chiropractic.',
        'Cupping.',
        'Gua sha Therapy.',
      ],
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 100,
      loop: true,
    })

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="hero" className="h-full">
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape1} alt="" />
      </div>
      <div className="container m-auto text-center hero">
        <h1 className="font-extrabold">
          Take best quality <br />
          Treatment for <span className=" highlight-text" ref={el}></span>
        </h1>
        <p>
          The art of medicine consists in amusing the patient while nature cures
          the disease. <br /> Treatment without prevention is simply
          unsustainable.
        </p>
        <Link to="contactUs" smooth spy>
          <PrimaryButton title={'appointment'} size={'lg'} />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
