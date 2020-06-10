import React from "react";
import { FormInvite } from "../components/sections";
import "./../assests/styles/invite.scss";
import { Link } from "gatsby";
import HeaderFooter from "./../hoc/header-footer";
const Login = () => {
  return (
    <>
      <HeaderFooter>
        <div className="login-main">
          <div className="center-column vw-100">
            <div className="form-box">
              <h2 className="login-form-heading text-center">Request Invite</h2>
              <FormInvite />
            </div>
            <div className="custom-row form-below">
              <Link to="/">
                <p>Go back to main page?</p>
              </Link>
            </div>
          </div>
        </div>
      </HeaderFooter>
    </>
  );
};
export default Login;
