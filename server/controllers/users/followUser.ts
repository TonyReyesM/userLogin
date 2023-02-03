import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
//  utils
import User from "../../models/user";
import Follow from "../../models/follow";
import expressAsyncHandler from "express-async-handler";

interface FollowRecord {
  followerUserId: string;
  followingUserId: string;
}

// @desc    Follow another user (from one user to another)s
// @route   POST /api/users/follow/:id
// @access  Public
const followUser = expressAsyncHandler<{ id: string }, any, FollowRecord>(
  async (req, res): Promise<void> => {
    // req.body example
    /*
    {
      followerUserId: 123456789,
      followingUserId: 987654321,
    }
  */

    const { followerUserId } = req.body; // get current user's id from body
    const { id: followingUserId } = req.params; // get `id` param from url

    // check that users exist
    try {
      const validUsers = await User.find({
        // Get two users with an id of `followerUserId` or `followingUserId`
        _id: { $in: [followerUserId, followingUserId] },
      });

      // check that result is exactly two users long
      if (validUsers.length !== 2) {
        throw new Error();
      }

      // TODO: any more validations?
    } catch (error) {
      res.status(404).json({
        error:
          error.message || "Error finding users. Try again with valid users.",
      });
    }

    // create a new follow document
    try {
      const followObj = await Follow.create({
        followerUserId,
        followingUserId,
      });

      res.status(200).json({ message: "Followed user successfully" });
    } catch (error) {
      // if user already follows target user, error will be here
      res.status(400).json({ error: "Error following user." });
    }
  }
);

export default followUser;
