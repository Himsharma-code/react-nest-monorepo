import React from "react";
import { LayoutProps } from "../routes";
import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import AuthLayout from "./AuthLayout";

type Props = {
  children: React.ReactNode;
  layout: LayoutProps;
};

const Layouts = {
  auth: AuthLayout,
  private: PrivateLayout,
  public: PublicLayout,
};
const Layout: React.FC<Props> = ({ children, layout }) => {
  const DynamicLayout = Layouts[layout];
  return <DynamicLayout>{children}</DynamicLayout>;
};

export default Layout;
