import React, { ButtonHTMLAttributes } from "react";
import classes from "./button.module.css";
import { Loading } from "../loader";
import { LoadingProps } from "../loader/Loading";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  isLoading?: boolean;
  loadingProps?: LoadingProps;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "contained",
  isLoading,
  loadingProps,
  ...props
}) => {
  const renderClass = () => {
    switch (variant) {
      case "text":
        return classes.text;
      case "outlined":
        return classes.outlined;
      default:
        return "";
    }
  };
  return (
    <button
      className={`${classes.btn} ${renderClass()} ${className}`}
      {...props}
    >
      {isLoading ? <Loading {...loadingProps} /> : children}
    </button>
  );
};

export default Button;
