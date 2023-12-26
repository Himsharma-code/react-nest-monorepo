import React from "react";

type Props = {
  children: React.ReactNode;
};
const PublicLayout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PublicLayout;
