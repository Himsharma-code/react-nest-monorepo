import React, { InputHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./input.module.css";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchable?: boolean;
  endAdornment?: React.ReactNode | string;
  variant?: "outlined" | "text";
  classes?: {
    body?: string;
    input?: string;
  };
}

const Input: React.FC<InputProps> = ({
  searchable,
  endAdornment,
  variant = "outlined",
  classes,
  ...props
}) => {
  let className = classes?.input || "";
  switch (variant) {
    case "text":
      className = `${className} !border-0`;
      break;
    default:
      break;
  }

  return (
    <div className={`relative h-auto ${classes?.body || ""}`}>
      {searchable && (
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <div>search</div>
        </div>
      )}
      {endAdornment && (
        <div className="absolute inset-y-0 right-0 flex items-center rounded bg-secondary m-0.5 px-2">
          {endAdornment}
        </div>
      )}
      <input
        {...props}
        className={` checked:bg-primary ${styles.input} ${className}`}
      />
    </div>
  );
};

export default Input;
