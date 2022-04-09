import React from "react";
import { useState } from "react";
import axios from "axios";
export default function NewForm() {
  const [values, setValues] = useState({
    Name: "",
    email: "",
    pass: "",
    confPass: "",
    phone: "",
  });

  const clearForm = () => {
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("confPass").value = "";
    document.getElementById("phone").value = "";
  };

  let errors = {};

  const data = {
    name: `${values.Name}`,
    email: `${values.email}`,
    password: `${values.pass}`,
    confPassword: `${values.confPass}`,
    phone: `${values.phone}`,
  };

  const [error, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(errors);
    if (!values.Name) {
      errors.Name = "*User Name is required*";
      document.getElementById("Name").focus();
      return errors;
    } else if (values.Name.length < 8) {
      document.getElementById("Name").focus();
      errors.Name = "*Name needs to be 8 characters or more*";
      return errors;
    }

    if (!values.email) {
      document.getElementById("email").focus();
      errors.email = "*Email required*";
      return errors;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      document.getElementById("email").focus();
      errors.email = "Email address is invalid";
      return errors;
    }

    if (!values.pass) {
      errors.pass = "*Password is required*";
      document.getElementById("pass").focus();
      return errors;
    } else if (
      !new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})"
      ).test(values.pass)
    ) {
      errors.pass = "*Password must be strong*";
      document.getElementById("pass").focus();
      return errors;
    }

    if (!values.confPass) {
      errors.confPass = "*Confirm Password is required*";
      document.getElementById("confPass").focus();
      return errors;
    } else if (values.pass !== values.confPass) {
      errors.confPass = "*Passwords do not match*";
      document.getElementById("confPass").focus();
      return errors;
    }

    if (!values.phone) {
      errors.phone = "*Phone number is required*";
      document.getElementById("phone").focus();
      return errors;
    } else if (!new RegExp("[0-9]").test(values.phone)) {
      errors.phone = "*Phone number must be Number*";
      document.getElementById("phone").focus();
      return errors;
    } else if (values.phone.length !== 10) {
      errors.phone = "*Invalid Phone Number*";
      document.getElementById("phone").focus();
      return errors;
    } else {
      console.log(data);
      console.log(errors);
      axios
        .post(`https://624fd248f0ae10a8ea4f8949.mockapi.io/form`, data)
        if(!errors){
            (clearForm());
        }else{
            alert("Eroorrrrrrrrr")
        }
    }
  };

  return (
    <div className="flex flex-col p-14">
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center rounded-xl bg-black p-7 shadow-slate-500 shadow-xl">
          <div className="space-y-3 ml-2">
            <div className="h-16 flex justify-center items-center text-3xl font-bold text-yellow-400">
              Create Your Account
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <label className="w-36 text-white text-sm">Enter Name :</label>
              <input
                className="w-72 p-2 rounded-sm text-sm bg-greyBlur text-white"
                type="text"
                name="Name"
                id="Name"
                placeholder="Enter the name"
                onChange={handleChange}
              />
              {error && error.Name && (
                <p className="text-red-400">{error.Name}</p>
              )}
            </div>
            <div className="flex flex-col justify-center space-y-1">
              {" "}
              <label className="w-36 text-white text-sm">Enter Email :</label>
              <input
                className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={handleChange}
              ></input>
              {error && error.email && (
                <p className="text-red-400">{error.email}</p>
              )}
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <label className="w-36 text-white text-sm">Password :</label>
              <input
                className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                type="password"
                id="pass"
                name="pass"
                placeholder="Enter Password"
                onChange={handleChange}
              ></input>
              {error && error.pass && (
                <p className="text-red-400">{error.pass}</p>
              )}
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <label className="w-40 text-white text-sm">
                Confirm Password:
              </label>
              <input
                className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                type="password"
                name="confPass"
                id="confPass"
                placeholder="Re-Enter Password"
                onChange={handleChange}
              ></input>
              {error && error.confPass && (
                <p className="text-red-400">{error.confPass}</p>
              )}
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <label className="w-36 text-white text-sm">Phone Number :</label>
              <input
                className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
              />
              {error && error.phone && (
                <p className="text-red-400">{error.phone}</p>
              )}
            </div>
            <div className="flex justify-center items-center pb-5">
              <button
                type="submit"
                className="w-full mt-2 p-1 text-xl font-bold bg-green-400 text-center rounded-sm text-black"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
