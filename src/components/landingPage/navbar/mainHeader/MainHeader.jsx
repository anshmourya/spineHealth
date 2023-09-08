import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo/spineHealth.png";
import PrimaryButton from "../../buttons/primaryButton/PrimaryButton";
import { RxHamburgerMenu } from "react-icons/rx";
const MainHeader = ({ fixedNav }) => {
  const navList = ["home", "knowUs", "service", "aboutUs", "contactUs"];
  return (
    <>
      <div
        className={`flex items-center justify-around m-auto ${
          fixedNav ? "fixed-nav" : ""
        }`}
        id="mainHeader"
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mr-4 navlist">
          <ul className="flex float-right gap-6 text-sm font-semibold text-gray-500 capitalize">
            {navList.map((list, index) => (
              <li key={index}>
                <ScrollLink
                  to={list}
                  spy
                  activeClass="active"
                  smooth
                  className="p-[5px] cursor-pointer"
                >
                  {list}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/login">
          <PrimaryButton title={"admin login"} />
        </Link>
        <div className="hamburger">
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
