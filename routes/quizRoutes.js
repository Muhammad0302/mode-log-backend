import express from "express";
import {
  postQuiz,
  getQuizDaily,
  getSleepDaily,
  getExerciseDaily,
  getQuizWeekly,
  getExerciseWeekly,
  getSleepWeekly,
} from "../controllers/quizController.js";
const router = express.Router();

// quiz table routes

router.post("/postQuiz", postQuiz);
router.get("/getDaily/:id", getQuizDaily);
router.get("/getSleepDaily/:id", getSleepDaily);
router.get("/getExerciseDaily/:id", getExerciseDaily);
router.get("/getWeekly/:id", getQuizWeekly);
router.get("/getSleepWeekly/:id", getSleepWeekly);
router.get("/getExerciseWeekly/:id", getExerciseWeekly);

export default router;
