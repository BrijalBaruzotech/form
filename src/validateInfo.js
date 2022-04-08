export default function validate(values) {
  let errors = {};

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
  } else if (values.phone.length !== 10) {
    errors.phone = "*Invalid Phone Number*";
    document.getElementById("phone").focus();
    return errors;
  }

  return errors;
}
