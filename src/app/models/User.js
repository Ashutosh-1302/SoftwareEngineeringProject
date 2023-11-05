import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  contact: Number,
  email: String,
  role: Number,
  selected: Boolean,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
