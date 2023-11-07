import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,

  rating: Number,

  description: String,
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

  imageUrl: String,
});

const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);

export default Course;
