import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      phoneNumber: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("User", UserSchema);

export default Users;
