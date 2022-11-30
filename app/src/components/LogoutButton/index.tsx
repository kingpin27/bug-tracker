import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

export default () => {
  const { logout } = useAuth0();

  return (
    <Button
      colorScheme="gray"
      rightIcon={<FiLogOut/>}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};
