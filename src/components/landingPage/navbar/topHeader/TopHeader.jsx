import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
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
          <a href="#">+91 98202 55451</a>
        </li>
        <li className="flex items-center gap-2 transition-colors">
          <MdOutlineAlternateEmail />
          <a href="#">kushwaha@spine-health.co.in</a>
        </li>
      </ul>
      <span className="font-semibold capitalize transition-colors cursor-pointer primary-color hover:text-black">
        appointment
      </span>
    </div>
  );
};

export default TopHeader;
