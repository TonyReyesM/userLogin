const mongoose = require("mongoose");

const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.virtual("profilePicturePath").get(function () {
//   if (this.profilePicture != null && this.profilePictureType != null) {
//     return `data: ${
//       this.profilePictureType
//     };charset=utf-8;base64,${this.profilePicture.toString("base64")}`;
//   }
// });

module.exports = mongoose.model("User", userSchema);
