import * as Yup from "yup";

export const updateUserSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string(),
});
