import React, { useState } from "react";
import { InputProps } from "./Input";

interface Props extends InputProps {}

const Switch: React.FC<Props> = ({ onChange, name, ...props }) => {
  const [isChecked, setIsChecked] = useState(!!props.value || false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) {
      return onChange(e);
    }
  };

  return (
    <label className="flex cursor-pointer select-none items-center mb-0">
      <div className="relative inline-block h-6 w-10">
        <input
          {...props}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only peer w-0 h-0 opacity-0"
        />
        <span
          className={`absolute inset-0 block rounded-full duration-400 bg-[#E5E7EB] before:absolute before:content-[''] before:w-4 before:h-4 before:left-[2px] before:bottom-[2px] before:bg-white before:duration-400 before:rounded-full
          peer-checked:before:bg-primary peer-checked:before:translate-x-full
          border-2 peer-checked:border-secondary peer-checked:border-2`}
        />
      </div>
    </label>
  );
};

export default Switch;
