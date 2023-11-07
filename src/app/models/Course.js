import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  contact: Number,
  rating: Number,
  email: String,
  role: Number,
  selected: Boolean,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],
});

const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);

export default Course;
