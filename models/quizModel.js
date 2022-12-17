import mongoose from "mongoose";

const quizModel = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    quesition: {
      type: String,
      required: true,
    },
    option: {
      happy: { type: Number, default: 0 },
      angrey: { type: Number, default: 0 },
      sad: { type: Number, default: 0 },
    },
    sleep_option: {
      not_well: { type: Number, default: 0 },
      ok: { type: Number, default: 0 },
      very_good: { type: Number, default: 0 },
    },
    exercise_option: {
      yes: { type: Number, default: 0 },
      no: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("quiz", quizModel);
export default Quiz;
