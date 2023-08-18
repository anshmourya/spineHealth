import React from "react";
//icons
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const SerachInput = ({ value, onChangeAction, clearInput }) => {
  return (
    <div className="flex items-center gap-2 p-2 border rounded-lg ">
      <AiOutlineSearch className="text-xl max-md:text-lg" />
      <input
        type="text"
        placeholder="Search within menu"
        className="outline-none md:text-lg"
        value={value || ""}
        onChange={onChangeAction}
      />
      <RxCross1 className="text-sm cursor-pointer" onClick={clearInput} />
    </div>
  );
};

export default SerachInput;
