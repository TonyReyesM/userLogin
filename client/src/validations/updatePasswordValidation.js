import * as Yup from "yup";

export const updatePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  newPassword: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, at least one letter, one number, and one special character"
    )
    .required("Required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords do not match")
    .required("Required"),
});
