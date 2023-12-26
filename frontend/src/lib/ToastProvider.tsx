import React, { useEffect, useMemo, useState } from "react";
import { ToastContext, ToastProps, ToastVariant } from "./ToastContext";
import { Toast } from "../components/toast";

const defaultToastProps: ToastProps = {
  autoClose: 5000,
  closeOnClick: false,
  message: "",
  position: "top",
};

interface Props {
  children: React.ReactNode;
}

const ToastProvider: React.FC<Props> = ({ children }) => {
  const [showToast, setShowToast] = useState<ToastVariant | null>(null);
  const [toastProps, setToastProps] = useState<ToastProps>(defaultToastProps);

  const openToast = (variant?: ToastVariant, props?: ToastProps) => {
    setShowToast(variant || "success");
    setToastProps({ ...toastProps, ...props });
  };

  const onClose = () => {
    setShowToast(null);
  };

  useEffect(() => {
    const { closeOnClick, autoClose } = toastProps;
    if (!closeOnClick && !!showToast) {
      setTimeout(() => {
        onClose();
      }, autoClose);
    }
  }, [toastProps?.autoClose, showToast]);

  const { position, icon, message } = useMemo(() => {
    const { position, message: customMessage } = toastProps;

    const getPositionClass = () => {
      switch (position) {
        case "bottom":
          return "bottom-24 left-[50%]";
        case "bottom-right":
          return "bottom-24 right-10";
        case "top-right":
          return "top-24 right-10";
        default:
          return "top-24 left-[50%]";
      }
    };

    const getDetails = () => {
      switch (showToast) {
        case "error":
          return {
            icon: "error.png",
            message: "Something went wrong",
          };
        case "warning":
          return {
            icon: "warning.png",
            message: "Something went wrong",
          };

        default:
          return {
            icon: "success.png",
            message: "Saved Successfully",
          };
      }
    };

    const { icon, message } = getDetails();
    return {
      position: getPositionClass(),
      icon,
      message: customMessage || message,
    };
  }, [toastProps, showToast]);

  return (
    <ToastContext.Provider
      value={{
        openToast,
      }}
    >
      {!!showToast && (
        <Toast
          icon={icon}
          message={message}
          position={position}
          onClose={onClose}
        />
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
