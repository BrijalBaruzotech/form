import { useState } from "react";
import validate from "./validateInfo";
import axios from "axios";

const useForm = () => {
  const [values, setValues] = useState({
    Name: "",
    email: "",
    pass: "",
    confPass: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({});

  const data = {
    name: `${values.Name}`,
    email: `${values.email}`,
    password: `${values.pass}`,
    confPassword: `${values.confPass}`,
    phone: `${values.phone}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(values);
    if (!values.Name) {
      errors.Name = "*User Name is required*";
    } else if (values.Name.length < 8) {
      errors.Name = "*Name needs to be 8 characters or more*";
    } else if (!values.email) {
      errors.email = "*Email required*";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    } else if (!values.pass) {
      errors.pass = "*Password is required*";
    } else if (
      !new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})"
      ).test(values.pass)
    ) {
      errors.pass = "*Password must be strong*";
    } else if (!values.confPass) {
      errors.confPass = "*Confirm Password is required*";
    } else if (values.pass !== values.confPass) {
      errors.confPass = "*Passwords do not match*";
    } else if (!values.phone) {
      errors.phone = "*Phone number is required*";
    } else if (values.phone.length !== 10) {
      errors.phone = "*Invalid Phone Number*";
    }
    else {
      axios.post(`https://624fd248f0ae10a8ea4f8949.mockapi.io/form`,data)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
