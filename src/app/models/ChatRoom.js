import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      message: String,
      date: Date,
    },
  ],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  teachingAssistant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const ChatRoom =
  mongoose.models.ChatRoom || mongoose.model("ChatRoom", ChatRoomSchema);
