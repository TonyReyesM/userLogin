const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
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
