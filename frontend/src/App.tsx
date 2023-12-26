import React from "react";
import routes, { LayoutProps } from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { ToastProvider } from "./lib";
import Layout from "./layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const getRoutes = (
    routes: {
      path: string;
      name: string;
      component: () => JSX.Element;
      layout: LayoutProps;
    }[],
  ) => {
    return routes.map(({ path, component: Component, layout }, key) => {
      return (
        <Route
          path={path}
          element={
            <Layout layout={layout}>
              <Component />
            </Layout>
          }
          key={key}
        />
      );
    });
  };

  return (
    <Provider store={store}>
      <ToastProvider>
        <BrowserRouter>
          <Routes>{getRoutes(routes)}</Routes>
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  );
}

export default App;
