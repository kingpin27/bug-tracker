import { useRoutes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";
import Profile from "./pages/profile";

export default () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile/>
    }
  ]);
  return (
    <>
      <Appbar />
      {routes}
    </>
  );
};
