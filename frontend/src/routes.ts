import Dashboard from "./pages/DashBoard";
import Home from "./pages/Home";
import Login from "./pages/Login";

export type LayoutProps = "auth" | "private" | "public";

interface RouteProps {
  path: string;
  component: () => JSX.Element;
  name: string;
  layout: LayoutProps;
}

const Layouts: Record<LayoutProps, LayoutProps> = {
  auth: "auth",
  private: "private",
  public: "public",
};

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
].map((r) => ({ ...r, layout: Layouts.auth }));

const privateRoutes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
].map((r) => ({ ...r, layout: Layouts.private }));

const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
].map((r) => ({ ...r, layout: Layouts.public }));

const routes: RouteProps[] = [...authRoutes, ...privateRoutes, ...publicRoutes];

export default routes;
