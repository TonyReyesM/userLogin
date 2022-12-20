import * as Yup from "yup";

export const createPostSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
});
