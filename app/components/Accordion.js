import React, { useState } from "react";

import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <div className="bg-secondary border border-l rounded-sm">
        <div className="min-h-[60px] flex items-center justify-between px-[30px]">
          <h6 className="h6 text-white">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[20px] text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
        } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]  border-neutral-100 bg-neutral-700`}
      >
        <div className="mt-6 text-white ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
