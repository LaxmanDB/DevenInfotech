import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,10}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,8})[ \\-]*)*?[0-9]{3,8}?[ \\-]*[0-9]{3,4}?$/;
const alphabet = /^[A-Za-z]+$/;
const stateOptions = ["Maharashtra", "Haryana", "Punjab", "Goa"];
const cityOptions = ["Pune", "Mumbai", "nashik", "Aurangabad", "Beed", "nagar"];
const Emplyee = () => {
  let validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("enter first name")
      .matches(alphabet, "enter only alphabets"),
    lastName: Yup.string()
      .required("enter last name")
      .matches(alphabet, "enter only alphabets"),
    mobile: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: Yup.string().email().lowercase(),
  });

  const [EditUser, setEditUser] = useState({});

  const handleupdate = () => {
    console.log("update");
  };

  function getInitialValues() {
    const initialValues = {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      state: "",
      city: "",
    };
    if (!EditUser) return initialValues;
    const { firstName, lastName, mobile, email, state, city } = EditUser;
    initialValues.firstName = firstName;
    initialValues.lastName = lastName;
    initialValues.mobile = mobile;
    initialValues.email = email;
    initialValues.state = state;
    initialValues.city = city;
    return initialValues;
  }

  return (
    <div style={{ alignItems: "center" }}>
      <Formik
        enableReinitialize
        initialValues={getInitialValues()}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          console.log("values");
        }}
      >
        {({ handleChange, handleSubmit, errors, handleBlur, values }) => (
          <form>
            <h1>DEVEN Infotech</h1>
            <h4>Emplyee Form</h4>
            <p>Enter your First name:</p>
            <input
              type="text"
              name="firstName"
              value={values["firstName"]}
              onChange={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
            />
            <label>{errors.firstName}</label>
            <p>Enter your last name:</p>
            <input
              type="text"
              name="lastName"
              value={values["lastName"]}
              onChange={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
            />
            <label>{errors.lastName}</label>
            <p>Enter your Mobile Number:</p>
            <input
              type="text"
              name="mobile"
              value={values["mobile"]}
              onChange={handleChange("mobile")}
              onBlur={handleBlur("Mobile")}
            />
            <label>{errors.mobile}</label>
            <p>Enter your Email id:</p>
            <input
              type="email"
              name="email"
              value={values["email"]}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <label>{errors.email}</label>
            <p>Select your state:</p>
            <select value={values["state"]} onChange={handleChange("state")}>
              {stateOptions.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <p>Select your city:</p>
            <select value={values["city"]} onChange={handleChange("city")}>
              {cityOptions.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <br />
            <br />
            <button
              type="submit"
              name="save"
              style={{ width: 70, height: 40 }}
              onClick={handleSubmit}
            >
              save
            </button>
          </form>
        )}
      </Formik>

      {EditUser ? (
        <button disabled="true" />
      ) : (
        <button onClick={() => handleupdate()}> Update</button>
      )}
    </div>
  );
};

export default Emplyee;
