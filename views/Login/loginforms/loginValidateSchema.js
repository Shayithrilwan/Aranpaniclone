import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Invalid E-mail!").required("E-mail is required!"),
  
  // password: yup
  //   .string()
  //   .min(5)
  //   .matches(passwordRules, { message: "Wrong password. Try again or click Forgot password to reset it." })
  //   .required("Password is required!"),
  
});
  