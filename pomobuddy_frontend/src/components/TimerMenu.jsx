import React, { useState } from "react";
import TimeList from "./TimeList";

const TimerMenu = ({ index, setIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center">
      <button
        onClick={toggleDropdown}
        className="bg-blue-200 font-semibold justify-center rounded-lg inline-flex items-center py-2 w-[200px]"
      >
        {TimeList[index].modeName}
      </button>
      {isOpen && (
        <div className="flex flex-col bg-white rounded-lg absolute mt-[44px] z-10">
          {TimeList.map((item, idx) => (
            <button
              className="font-semibold w-[200px] py-2"
              key={idx}
              onClick={() => {
                toggleDropdown();
                setIndex(idx);
              }}
            >
              {item.modeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimerMenu;
