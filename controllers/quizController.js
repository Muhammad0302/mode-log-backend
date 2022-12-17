import Quiz from "../models/quizModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

// post Quiz data

const postQuiz = asyncHandler(async (req, res) => {
  const quizeData = new Quiz({
    user_id: req.body.user_id,
    quesition: req.body.quesition,
    option: req.body.option,
    sleep_option: req.body.sleep_option,
    exercise_option: req.body.exercise_option,
  });
  try {
    const quiz = await quizeData.save();
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get quiz data daily base

const getQuizDaily = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      quesition: "How you feeling today?",
      createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    }).select("user_id quesition option updatedAt");
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get sleep data daily base

const getSleepDaily = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      quesition: "How did you sleep?",
      createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    }).select("user_id quesition sleep_option updatedAt");
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get exercise  data daily base

const getExerciseDaily = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      quesition: "Did you do any type of exercise today?",
      createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    }).select("user_id quesition exercise_option updatedAt");
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get quiz on weekly base

const getQuizWeekly = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      quesition: "How you feeling today?",
      createdAt: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
      },
    }).select("user_id quesition option updatedAt");
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get exercise on weekly base

const getExerciseWeekly = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      quesition: "Did you do any type of exercise today?",
      createdAt: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
      },
    }).select("user_id quesition exercise_option updatedAt");
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get sleep on weekly base

const getSleepWeekly = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      quesition: "How did you sleep?",
      createdAt: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
      },
    }).select("user_id quesition sleep_option updatedAt");
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

export {
  postQuiz,
  getQuizDaily,
  getQuizWeekly,
  getSleepDaily,
  getExerciseDaily,
  getExerciseWeekly,
  getSleepWeekly,
};
