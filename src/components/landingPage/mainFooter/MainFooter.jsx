import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-scroll'
const MainFooter = () => {
  const navList = ['home', 'knowUs', 'service', 'contactUs', 'aboutUs']
  const services = ['COD', 'Cupping', 'Weight & inch loss']
  return (
    <footer className="footer">
      <div className="container m-auto">
        <div className="row">
          <div className="footer-col">
            <h4>SpineHealth</h4>
            <ul>
              {navList.map((list, index) => (
                <li key={index}>
                  <Link
                    activeClass="active"
                    spy
                    to={list}
                    smooth
                    className="cursor-pointer"
                  >
                    {list}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    activeClass="active"
                    spy
                    to={'service'}
                    smooth
                    className="cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <Link to="">+91 98202 55451</Link>
              </li>
              <li>
                <Link to="">kushwaha@spinehealth.co.in</Link>
              </li>
              <li>
                <Link to="">
                  04 parinary, 5c, Thakur Complex <br />
                  Kandivali (E) 400101
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <AiOutlineInstagram />
              <AiOutlineInstagram />
              <AiOutlineInstagram />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
