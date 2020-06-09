import React from "react";
import "./../../assests/styles/login-component.scss";
import { Button } from "./../elements";

const FormInvite = (props) => {
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
            <label className="form-label" htmlFor="phone number">
              Phone number
            </label>
            <input
              type="number"
              className="form-control form-control-lg"
              id="formGroupPhoneNumber"
            />
          </div>
        </div>
        <div className="form-button-invite inline-center">
          <Button btnType={3} colorType={3} btnText="Create my account" />
        </div>
      </form>
    </div>
  );
};

export { FormInvite };
