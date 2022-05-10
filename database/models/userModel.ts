import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../../interfaces/IUser";

const userSchema = new Schema<IUser>(
  {
    googleId: { type: String, required: true },
    displayName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
    collection: "storyshar_users",
  }
);

const UserModel = mongoose.models.User || model<IUser>("User", userSchema);

export default UserModel;
