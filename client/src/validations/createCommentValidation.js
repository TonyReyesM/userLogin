import * as Yup from "yup";

export const createCommentSchema = Yup.object().shape({
  content: Yup.string().required("Required"),
});
