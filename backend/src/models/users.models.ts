import mongoose, { Schema } from "mongoose";
import { userProps } from "../types/user";

const UserSchema = new Schema<userProps>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: {
    type: String,
    enum: ["candidato", "recrutador", "admin"],
    default: "candidato"
  },
  skills: [String],
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model<userProps>("user", UserSchema);