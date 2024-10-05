import mongoose, { Schema, Document } from "mongoose";

// Define the IUser interface, which extends the Mongoose Document
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  roles: string[];
  permissions: string[];
}

// Define the User schema
const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      default: ["user"],
    },
    permissions: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", userSchema);
