import React from "react";

interface Props {
  icon: string;
  message: string;
  position: string;
  closeOnClick?: boolean;
  onClose: () => void;
}

const Toast: React.FC<Props> = ({
  icon,
  message,
  position,
  closeOnClick,
  onClose,
}) => {
  return (
    <div
      className={`z-999 min-w-[250px] flex gap-2 items-center bg-white p-3 rounded fixed shadow ${position}`}
    >
      <img
        width={25}
        height={25}
        src={`/assets/images/${icon}`}
        alt="success"
      />
      <label className="mb-0">{message}</label>
      {closeOnClick && (
        <button className="ml-10 cursor-pointer" onClick={onClose}>
          close
        </button>
      )}
    </div>
  );
};

export default Toast;
