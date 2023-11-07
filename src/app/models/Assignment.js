import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  title: String,
  desc: String,
  dueDate: Date,
  submissions: [
    {
      madeBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      submissionUrl: String,
      grade: Number,
      date: Date,
    },
  ],
});
