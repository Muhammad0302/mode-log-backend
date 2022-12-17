import express from "express";
import {
  login,
  register,
  forgotPassword,
  addUpdatePass,
  addPerson,
  getPersonData,
  getPersonStory,
  addStoryData,
  addPersonData,
} from "../controllers/userController.js";
const router = express.Router();

// user table routes
router.post("/register", register);
router.post("/login", login);
router.post("/forgotPass", forgotPassword);
router.post("/addUpdatePass/:id/:token", addUpdatePass);
router.post("/addPerson", addPerson);
router.get("/getPerson", getPersonData);
router.post("/addStoryData", addStoryData);
router.post("/addPersonData", addPersonData);
router.get("/getPersonStory/:id", getPersonStory);

export default router;
