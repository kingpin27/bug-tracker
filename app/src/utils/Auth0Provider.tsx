import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default (props: Props) => {
  return (
    <Auth0Provider
      clientId="IBPw9B0R3gbCnCJUf5ExKh00mD6DilEF"
      domain="dev-g4ww4wwn.us.auth0.com"
      redirectUri={window.location.origin}
    >
      {props.children}
    </Auth0Provider>
  );
};
