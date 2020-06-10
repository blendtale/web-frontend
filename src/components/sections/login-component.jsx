import React, { useState } from "react";
import "./../../assests/styles/login-component.scss";
import { Button } from "./../elements";
import firebase from "./../../util/firebase";
import { CountriesList } from "./../../static-datta/index";

const FormInvite = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("Select Country");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [success, setSuccess] = useState(false);
  const changeSelectedCountry = (event) => {
    setCountry(event.target.value);
  };

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let currentErrorMessage = [];
    setError(false);
    setSuccess(false);
    setErrorMessage(currentErrorMessage);
    // check if email is valid
    if (!firstName || !lastName || !country || !email) {
      setError(true);
      currentErrorMessage.push("Please fill all the fields");
      setErrorMessage(currentErrorMessage);
      return;
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setError(true);
      currentErrorMessage.push("Email Id invalid");
      setErrorMessage(currentErrorMessage);
      return;
    } else {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
      };
      try {
        await firebase.addContent(email, payload);
        setSuccess(true);
      } catch (error) {
        console.error(error);
        setError(true);
        currentErrorMessage.push("Internal Error, Please try later");
        setErrorMessage(currentErrorMessage);
      }
    }
  };
  return (
    <div className="form-main center-column">
      {error
        ? errorMessage.map((errorMessage, index) => {
            return (
              <div key={index} className="notification">
                <p className="error">{errorMessage}</p>
              </div>
            );
          })
        : null}
      {success ? (
        <div className="notification">
          <p className="sucess">
            Sucessfully Saved your details. We will send you invite as soon as
            we start our beta programe
          </p>
        </div>
      ) : null}
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
              onChange={changeFirstName}
              value={firstName}
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
              onChange={changeLastName}
              value={lastName}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12 col-lg-12 col-12">
            <label className="form-label w-100" htmlFor="country">
              Country
            </label>
            <select
              className="form-control"
              placeholder="Please select country"
              value={country}
              onChange={changeSelectedCountry}
            >
              <option value=""></option>
              {CountriesList.map((element, index) => (
                <option key={index + element.code} value={element.name}>
                  {element.name}
                </option>
              ))}
            </select>
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
              onChange={changeEmail}
              value={email}
            />
          </div>
        </div>
        <div className="form-button-invite inline-center">
          <Button
            btnType={3}
            colorType={3}
            btnText="Requet Invite"
            onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export { FormInvite };
