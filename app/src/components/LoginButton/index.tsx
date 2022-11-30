import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@chakra-ui/react"
import { FiLogIn } from "react-icons/fi";


export default () => {
  const { loginWithRedirect } = useAuth0();
  
  return <Button colorScheme="blue" rightIcon={<FiLogIn/>} onClick={() => loginWithRedirect()}>Login</Button>;
};
