import React, { TextareaHTMLAttributes } from "react";
import styles from "./input.module.css";
import { InputProps } from "./Input";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<InputProps, "variant"> {
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  variant,
  ...props
}) => {
  switch (variant) {
    case "text":
      className = `${className} !border-0`;
      break;
    default:
      break;
  }
  return <textarea {...props} className={`${styles.textarea} ${className}`} />;
};

export default TextArea;
