import React from "react";
import Button, { ButtonProps } from "./Button";

interface TextButtonProps extends Omit<ButtonProps, "children"> {
  text?: string | React.ReactNode;
}

interface Props {
  isEqual?: boolean;
  saveBtnProps?: TextButtonProps;
  cancelBtnProps?: TextButtonProps;
  onSubmit?: () => void;
  onCancel?: () => void;
  classes?: {
    body?: string;
  };
  isLoading?: boolean;
}

const ActionButtons: React.FC<Props> = ({
  isEqual,
  onCancel,
  onSubmit,
  saveBtnProps,
  cancelBtnProps,
  classes,
}) => {
  const { text: saveText = "Save" } = saveBtnProps || {};
  const { text: cancelText = "Cancel" } = cancelBtnProps || {};
  return (
    <div
      className={`shadow overflow-hidden fixed bottom-0 bg-white py-4 -mx-8 w-full space-x-3 ${
        classes?.body || ""
      }`}
    >
      <Button
        onClick={onSubmit}
        disabled={isEqual}
        type="submit"
        className="ml-8"
        {...saveBtnProps}
        loadingProps={{
          classes: {
            dot: "!bg-white",
          },
        }}
      >
        {saveText}
      </Button>
      {onCancel && (
        <Button
          onClick={onCancel}
          variant="outlined"
          className="ml-8"
          {...cancelBtnProps}
        >
          {cancelText}
        </Button>
      )}
    </div>
  );
};

export default ActionButtons;
