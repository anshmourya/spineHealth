import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const TopHeader = ({ fixedNav }) => {
  return (
    <div
      id="top-header"
      className={`flex justify-around p-2 m-auto ${
        fixedNav ? "hidden" : "flex"
      }`}
    >
      <ul className="flex items-center gap-3 text-sm text-gray-600">
        <li className="flex items-center gap-2 transition-colors ">
          <BsTelephone />
          <Link>+91 98202 55451</Link>
        </li>
        <li className="flex items-center gap-2 transition-colors">
          <MdOutlineAlternateEmail />
          <Link>kushwaha@spine-health.co.in</Link>
        </li>
      </ul>
      <span className="font-semibold capitalize transition-colors cursor-pointer primary-color hover:text-black">
        <ScrollLink to="contactUs" smooth>
          appointment
        </ScrollLink>
      </span>
    </div>
  );
};

export default TopHeader;
