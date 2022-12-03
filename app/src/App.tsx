import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import SidebarWithHeader from "./components/SidebarWithHeader";

export default () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return <SidebarWithHeader>{routes}</SidebarWithHeader>;
};
