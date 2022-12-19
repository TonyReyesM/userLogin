import * as Yup from "yup";

export const userRegisterSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, at least one letter, one number, and one special character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Required"),
});
