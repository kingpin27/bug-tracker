import { useAuth0 } from "@auth0/auth0-react";
import LoadingScreen from "../components/LoadingScreen";
import { Navigate } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

export default (props: Props) => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  if (isLoading) return <LoadingScreen />;
  if (!isAuthenticated) return <Navigate to="/" />;
  return <>{props.children}</>;
};
