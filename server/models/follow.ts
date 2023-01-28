import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
  {
    followerUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    followingUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

followSchema.index(
  {
    followerUserId: 1,
    followingUserId: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model("Follow", followSchema);
