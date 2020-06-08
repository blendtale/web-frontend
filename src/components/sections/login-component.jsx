import React from "react";
import "./../../assests/styles/login-component.scss";
import { Button } from "./../elements";

// TODO: Add proptypes here
// TODO: Signup logic here
const FormLogin = (props) => {
  return (
    <div className="form-main center-column">
      <form>
        <div className="user-email-login">
          <label className="form-label" htmlFor="lastName">
            Email Address
          </label>
          <input
            type="text"
            className="form-control user-login-boxes form-control-lg"
          />
          <label className="form-label" htmlFor="lastName">
            Password
          </label>
          <input
            type="password"
            className="form-control user-login-boxes form-control-lg"
          />
          <div className="form-button-login">
            <Button btnType={3} colorType={3} btnText="Login" />
          </div>
        </div>
      </form>
    </div>
  );
};

const Formsignup = (props) => {
  return (
    <div className="form-main center-column">
      <form>
        <div className="form-group row">
          <div className="col-md-6 col-lg-6 col-12">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="formGroupFirstName"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-12">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="formGroupLastItem"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12 col-lg-12 col-12">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="formGroupEmail"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12 col-lg-12 col-12">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="formGroupPhoneNumber"
            />
          </div>
        </div>
        <div className="form-button-signup inline-center">
          <Button btnType={3} colorType={3} btnText="Create my account" />
        </div>
      </form>
    </div>
  );
};

export { FormLogin, Formsignup };
