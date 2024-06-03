import React, { useState } from "react";
import TimeList from "./TimeList";

const TimerMenu = ({ index, setIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleDropdown}
        className="bg-blue-200 font-semibold justify-center rounded-lg inline-flex items-center px-4 py-2"
      >
        {TimeList[index].displayMessage}
      </button>
      {isOpen && (
        <div className="flex flex-col bg-white rounded-lg">
          {TimeList.map((item, idx) => (
            <button
              className="justify-center font-semibold gap-4 px-4 py-2"
              key={idx}
              onClick={() => {
                toggleDropdown();
                setIndex(idx);
              }}
            >
              {item.displayMessage}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimerMenu;
