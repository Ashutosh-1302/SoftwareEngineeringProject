import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: String,
  desc: String,
  videoUrl: String,
});

const Lesson = mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);

export default Lesson;
