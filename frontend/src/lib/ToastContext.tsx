import { createContext } from "react";

export interface ToastProps {
  position?: "top" | "bottom" | "top-right" | "bottom-right";
  message?: string;
  closeOnClick?: boolean;
  autoClose?: number;
}

export type ToastVariant = "warning" | "success" | "error";

interface ToastContextProps {
  openToast: (variant?: ToastVariant, props?: ToastProps) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  openToast: () => {},
});
