const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
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
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    about: {
      type: String,
    },
    photoURL: {
      type: Buffer,
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
