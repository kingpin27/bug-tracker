import styles from "./style.module.css";
import {
  Heading,
  Spinner,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import BugImage from "../../assets/insect-100.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import { FiMoreVertical, FiGithub, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default () => {
  const { isLoading, isAuthenticated, user, logout } = useAuth0();
  let firstName = undefined;
  if (!isLoading && isAuthenticated) {
    firstName = user?.name?.split(" ", 1)[0];
  }
  const handleGotoGithubRepo = () => {
    window.open("https://github.com/kingpin27/BugTracker");
  };
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={BugImage} alt="" />
        <Heading size="lg">Bug Tracker</Heading>
      </div>
      {!isLoading && isAuthenticated && (
        <Button className={styles.projectSelector}>Select Project</Button>
      )}
      {isLoading && <Spinner />}
      {!isLoading && !isAuthenticated && (
        <div className="row-div">
          <LoginButton />
        </div>
      )}
      {!isLoading && isAuthenticated && (
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="blue"
            rightIcon={<FiMoreVertical />}
          >
            {`Hi ${firstName}!`}
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/profile" icon={<CgProfile />}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => logout()} icon={<FiLogOut />}>
              Logout
            </MenuItem>
            <MenuItem onClick={handleGotoGithubRepo} icon={<FiGithub />}>
              Source Code
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </div>
  );
};
