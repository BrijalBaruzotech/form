import { useState } from "react";
import validate from "./validateInfo";
import axios from "axios";

const useForm = () => {
  const clearForm = () => {
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("confPass").value = "";
    document.getElementById("phone").value = "";
  };
  const [values, setValues] = useState({
    Name: "",
    email: "",
    pass: "",
    confPass: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  // const [storeError, setErrosStore] = useState({});
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
    axios
      .post(`https://624fd248f0ae10a8ea4f8949.mockapi.io/form`, data)
      // .then(clearForm);
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
