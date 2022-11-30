import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import LoadingScreen from "../../components/LoadingScreen";
import styles from "./style.module.css";
import {FiPlusCircle} from 'react-icons/fi'

export default () => {
  const {isLoading, isAuthenticated, loginWithRedirect} = useAuth0()
  if(isLoading) return <LoadingScreen/>
  if(!isAuthenticated) {
    return <div className={styles.loadingRoot}>
      <Button rightIcon={<FiPlusCircle />} colorScheme="blue" onClick={() => loginWithRedirect()}>Create Account</Button>
    </div>
  }
  return (
    <div>
      
    </div>
  )
};
