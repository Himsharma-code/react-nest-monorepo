import React from "react";

type Props = {
  children: React.ReactNode;
};

const PrivateLayout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PrivateLayout;
