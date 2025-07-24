import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  country: String,
  state: String,
  province: String,
  email: String,
  industry: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

export default User;
